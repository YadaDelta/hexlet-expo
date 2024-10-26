import { View, Text, Image, StyleSheet } from "react-native";

export default function LanguageCard({ languageList }) {
  const { name, knowledge } = languageList;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{knowledge}</Text>
      <Image style={styles.logo} source={languageList.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
