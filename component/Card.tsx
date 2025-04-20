import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  number: number;
  arab: string;
  translation: string;
}

export default function HadistCard({
  title,
  number,
  arab,
  translation,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title} - No. {number}</Text>
      <Text style={styles.arab}>{arab}</Text>
      <Text style={styles.translation}>{translation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "orange",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  arab: {
    fontSize: 20,
    textAlign: "right",
    marginBottom: 8,
  },
  translation: {
    fontSize: 14,
    color: "#333",
  },
});
