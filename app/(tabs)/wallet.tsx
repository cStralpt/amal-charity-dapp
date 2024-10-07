import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import UserWallet from '@/components/wallet/UserWallet';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <UserWallet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main.primaryBlue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
