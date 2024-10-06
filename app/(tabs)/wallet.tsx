import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function WalletScreen() {
  return (
    <View style={{ backgroundColor: Colors.main.primaryBlue, flex: 1 }}>
      <Text>Wallet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
