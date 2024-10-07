import { UserRound } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function UserWallet() {
    return (
        <View style={styles.container}>
            <UserRound size={150} color={Colors.main.skyMilk} />
            <View style={{ flexDirection: "row" }}>
                <Text style={{ color: Colors.main.skyMilk }}>Balance: </Text>
                <Text style={{ color: Colors.main.skyMilk, fontWeight: "700" }}>$983</Text>
            </View>
            <Pressable style={({ pressed }) => [
                styles.addressButton,
                pressed && styles.addressButtonActive
            ]}>
                <Text style={{ color: Colors.main.skyMilk, fontWeight: "700", fontSize: 18 }}>0x221....fh63h</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.main.primaryBlue,
        alignItems: "center"
    },
    addressButton: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.2)",
        padding: 10,
        borderRadius: 99,
        paddingHorizontal: 20,
        marginTop: 20
    },
    addressButtonActive: {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.5)"
    }
});