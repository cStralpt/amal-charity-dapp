import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            Array.from({ length: 15 }).map(d => (
              <Pressable
                onPress={() => router.push("/charityDetail")}
                style={({ pressed }) => [styles.cardContainer, pressed && styles.cardActive]}>
                <View style={styles.imgContainer} />
                <View>
                  <Text style={styles.cardTitle}>Humanity Aid</Text>
                  <Text style={styles.cardContent}>Collected funds: $5044</Text>
                </View>
                <ChevronRight size={23} color={Colors.main.skyMilk} style={{ marginLeft: "auto", marginBottom: "auto" }} />
              </Pressable>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main.primaryBlue,
    flex: 1,
    paddingHorizontal: 20
  },
  imgContainer: {
    borderRadius: 5,
    height: 80,
    width: 80,
    backgroundColor: Colors.main.armyGreen
  },
  cardTitle: {
    fontWeight: "700",
    color: Colors.main.skyMilk,
    fontSize: 16
  },
  cardContent: {
    fontWeight: "300",
    color: Colors.main.skyMilk,
    fontSize: 16
  },
  cardContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 5,
    borderRadius: 5
  },
  cardActive: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)"
  }
});
