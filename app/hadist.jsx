// app/index.jsx
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

const RIWAYATS = [
  { id: 'bukhari', name: 'HR. Bukhari' },
  { id: 'ahmad', name: 'HR. Ahmad' },
  { id: 'tirmidzi', name: 'HR. Tirmidzi' },
];

export default function Home() {
  const router = useRouter();

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({
        pathname: '/detailHadist',
        params: { riwayatId: item.id, riwayatName: item.name },
      })}
    >
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={RIWAYATS}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  card: {
    padding: 20,
    backgroundColor: 'orange',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
});
