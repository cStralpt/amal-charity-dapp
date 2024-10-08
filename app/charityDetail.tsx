import { Colors } from "@/constants/Colors";
import { HandHeart, HandHelping, Heart, HeartHandshake } from "lucide-react-native";
import { View, StyleSheet, Text, Pressable, SafeAreaView, ScrollView, TextInput } from "react-native";

export default function CharityDetailScreen() {
    return (
        <View style={styles.container}>
            <View>
                <SafeAreaView>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ gap: 10, flexDirection: "row" }}>
                            {Array.from({ length: 7 }).map((_, index) => (
                                <View key={index} style={styles.horizontalItem} />
                            ))}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>

            <View style={styles.content}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{
                            paddingTop: 40, gap: 20,
                            flexDirection: "row",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        }}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={[styles.text, styles.number]}>$8733</Text>
                                <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                                    <Text style={[styles.text, { color: Colors.main.leavesGreen }]}>
                                        Raised Funds
                                    </Text>
                                    <HeartHandshake size={23} color={Colors.main.leavesGreen} />
                                </View>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={[styles.text, styles.number]}>$9377</Text>
                                <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                                    <Text style={[styles.text, { color: Colors.main.leavesGreen }]}>
                                        Needed
                                    </Text>
                                    <HandHelping size={23} color={Colors.main.leavesGreen} />
                                </View>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={[styles.text, styles.number]}>$977</Text>
                                <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
                                    <Text style={[styles.text, { color: Colors.main.leavesGreen }]}>
                                        Available
                                    </Text>
                                    <HandHeart size={23} color={Colors.main.leavesGreen} />
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingTop: 40, gap: 10, paddingBottom: 60 }}>
                            <Text style={[
                                styles.text,
                                styles.heading,
                                {
                                    textAlign: "center",
                                    textDecorationLine: "underline"
                                }]}>Sedekah Untuk Palestine</Text>
                            <Text style={[styles.text, styles.heading]}>Description:</Text>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime minus assumenda enim. Veniam quam sapiente quas, sequi dolorem quo at temporibus nihil unde maiores nemo natus fugit aut, saepe iure vitae nam excepturi. In voluptatem facilis magnam nihil eligendi recusandae ratione non perferendis. Alias nemo in expedita cumque error? Libero eveniet iure corporis quod, sit aperiam deserunt beatae. In architecto accusamus consectetur laborum totam saepe impedit quod, corrupti, sunt natus commodi animi labore qui amet ullam sint, odit quae nam! Provident deleniti esse perferendis distinctio eum. Rem amet earum voluptatibus sunt facere, tempora odit laboriosam officia porro qui provident, perspiciatis recusandae. Eaque sunt labore natus ipsum, harum veritatis doloribus cumque cum veniam maiores doloremque. Exercitationem deserunt aut consectetur ab neque, repellat error molestias deleniti maxime vero eveniet laborum quos! Perferendis ducimus quod fugiat nostrum nihil possimus. Mollitia excepturi accusamus, ipsam quae nemo neque praesentium cumque explicabo dolore tempore rem, blanditiis hic reiciendis eum delectus. Nobis eius debitis quia fugiat suscipit in, amet expedita esse id accusantium facere, distinctio tempora pariatur quo sit at. Voluptatibus obcaecati provident voluptatem voluptatum architecto ipsa qui excepturi quidem facilis illum, aperiam ab necessitatibus impedit? Itaque inventore, id, omnis sapiente accusamus quisquam corrupti magni ipsa esse voluptates non at, veniam reiciendis facere magnam totam nesciunt labore autem! Quidem, consectetur iusto! Voluptatem laborum animi repellendus adipisci odit perferendis, nam illum sed a praesentium facere soluta obcaecati voluptates est esse neque iure eos sunt asperiores ut. Alias, magnam unde voluptatem fugiat pariatur nam. Aspernatur ab ratione illum suscipit aut excepturi rerum reiciendis fugit nesciunt facilis repellat praesentium aliquam recusandae reprehenderit ex exercitationem omnis, voluptate odio ducimus vel quaerat nisi soluta? Non earum, vitae pariatur reprehenderit maxime molestiae odio atque perferendis dicta? Atque quis doloribus sequi optio pariatur nam nesciunt incidunt! Nesciunt eaque a, laborum suscipit natus deleniti.
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
            <View style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                flexDirection: "row",
                backgroundColor: Colors.main.primaryBlue,
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
                alignItems: "center",
            }}>
                <Text style={[styles.heading, { color: Colors.main.skyMilk }]}>$</Text>
                <TextInput placeholder="Amount"
                    placeholderTextColor={Colors.main.leavesGreen}
                    keyboardType="number-pad" style={{
                        fontWeight: "700",
                        fontSize: 20,
                        color: Colors.main.skyMilk, flexGrow: 1
                    }} />
                <Pressable style={({ pressed }) => [styles.donateButton, pressed && styles.donateButtonActive]}>
                    <Text style={{ fontWeight: "700", color: Colors.main.primaryBlue }}>Donate Now</Text>
                    <Heart size={23} color={Colors.main.armyGreen} fill={Colors.main.armyGreen} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.main.primaryBlue,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    horizontalItem: {
        backgroundColor: Colors.main.armyGreen,
        borderRadius: 10,
        width: 390,
        height: 190
    },
    donateButton: {
        backgroundColor: Colors.main.skyMilk,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        gap: 10,
        justifyContent: "center"
    },
    donateButtonActive: {
        opacity: 0.6,
    },
    text: {
        color: Colors.main.skyMilk,
    },
    heading: {
        fontWeight: "700",
        fontSize: 20,
    },
    number: {
        fontWeight: "700",
        fontSize: 40,
    },
});
