import { Wallet } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function CreateWallet() {
    return (
        <View style={styles.container}>
            <View style={{ flexBasis: "50%", justifyContent: "flex-end", alignItems: "center" }}>
                <Wallet size={150} color={Colors.main.skyMilk} />
                <Text style={{ color: Colors.main.skyMilk, fontSize: 29, textAlign: "center", fontWeight: "700" }}>Import your wallet, or create a new one</Text>
            </View>
            <View style={{ marginTop: "auto" }}>
                <Pressable style={({ pressed }) => [
                    styles.importWalletButton,
                    pressed && styles.importWalletButtonActive
                ]}>
                    <Text style={{ color: Colors.main.skyMilk, fontWeight: "700", }}>Create New Wallet</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.importWalletButton,
                    pressed && styles.importWalletButtonActive
                ]}>
                    <Text style={{ color: Colors.main.skyMilk, fontWeight: "300", }}>Import Private Key</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    styles.importWalletButton,
                    pressed && styles.importWalletButtonActive
                ]}>
                    <Text style={{ color: Colors.main.skyMilk, fontWeight: "300", }}>Import Mnemonic</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.main.primaryBlue,
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    importWalletButton: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.2)",
        padding: 10,
        borderRadius: 99,
        paddingHorizontal: 20,
        marginTop: 20,
        width: 170,
        alignItems: "center"
    },
    importWalletButtonActive: {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.5)"
    }
});