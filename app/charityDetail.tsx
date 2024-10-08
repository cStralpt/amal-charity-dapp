import { Colors } from "@/constants/Colors";
import { View, StyleSheet, Text, Pressable, SafeAreaView, ScrollView } from "react-native";

export default function CharityDetailScreen() {
    return (
        <View style={styles.container}>
            <View>
                <SafeAreaView>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ gap: 10, flexDirection: "row" }}>
                            {Array.from({ length: 7 }).map(d => (<View style={{
                                backgroundColor: Colors.main.armyGreen,
                                borderRadius: 10,
                                width: 390,
                                height: 190
                            }} />))}
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={{ paddingTop: 40, gap: 10 }}>
                    <Text style={[styles.text, styles.heading]}>Description:</Text>
                    <Text style={[styles.text]}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cumque in quod commodi numquam. Pariatur laudantium excepturi dolor omnis odit.
                    </Text>
                </View>
            </View>
            <Pressable style={({ pressed }) => [styles.donateButton, pressed && styles.donateButtonActive]}>
                <Text style={{ fontWeight: "700", color: Colors.main.primaryBlue }}>Donate Now</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.main.primaryBlue,
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    donateButton: {
        backgroundColor: Colors.main.skyMilk,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        marginTop: "auto",
        marginLeft: "auto"
    },
    donateButtonActive: {
        opacity: 0.6
    },
    text: {
        color: Colors.main.skyMilk
    },
    heading: {
        fontWeight: "700",
        fontSize: 20
    }
});