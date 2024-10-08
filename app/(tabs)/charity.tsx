import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function CharityScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='program name'
        style={styles.titleInput} />
      <TextInput
        placeholder='charity target funds'
        style={styles.titleInput} />
      <TextInput
        placeholder='description'
        textAlignVertical="top"
        numberOfLines={4}
        style={styles.descriptionInput}
        multiline={true} />
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonActive]}>
        <Text style={{
          color: Colors.main.skyMilk,
          fontWeight: "700"
        }}>CREATE CHARITY</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    backgroundColor: Colors.main.skyMilk,
    color: Colors.main.primaryBlue,
    padding: 10,
    borderRadius: 10,
    width: "100%"
  },
  container: {
    backgroundColor: Colors.main.primaryBlue,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 10,
    alignItems: "center"
  },
  descriptionInput: {
    backgroundColor: Colors.main.skyMilk,
    color: Colors.main.primaryBlue,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    flex: 1
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: "transparent",
    borderRadius: 10
  },
  buttonActive: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)"

  }
});
