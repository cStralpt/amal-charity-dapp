import { Colors } from '@/constants/Colors';
import { HandHelping, House, NotebookTabs, Wallet } from 'lucide-react-native';
import { View, StyleSheet } from 'react-native';

const HomeIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <House
      fill={isActive ? Colors.main.skyMilk : "none"}
      size={23}
      color={isActive ? Colors.main.armyGreen : Colors.main.skyMilk}
    />
  );
};

const CharityIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <HandHelping
      fill={isActive ? Colors.main.skyMilk : "none"}
      size={23}
      color={isActive ? Colors.main.armyGreen : Colors.main.skyMilk}
    />
  );
};

const WalletIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <Wallet
      fill={isActive ? Colors.main.skyMilk : "none"}
      size={23}
      color={isActive ? Colors.main.armyGreen : Colors.main.skyMilk}
    />
  );
};

export function TabBarIcon({
  isActive,
  name,
}: { name: "home" | "charity" | "wallet"; isActive: boolean }) {
  return (
    <View style={styles.icon}>
      {name === "home" && <HomeIcon isActive={isActive} />}
      {name === "wallet" && <WalletIcon isActive={isActive} />}
      {name === "charity" && <CharityIcon isActive={isActive} />}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 99,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
});