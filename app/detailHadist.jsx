// app/detailHadist.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailHadist() {
  const { riwayatId, riwayatName } = useLocalSearchParams();
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHadith = async () => {
      try {
        const response = await fetch(`https://api.hadith.gading.dev/books/${riwayatId}?range=1-10`);
        const data = await response.json();
        setHadiths(data.data.hadiths);
      } catch (error) {
        console.error('Error fetching hadith:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHadith();
  }, [riwayatId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{riwayatName}</Text>
      <FlatList
        data={hadiths}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <View style={styles.hadithContainer}>
            <Text style={styles.hadithText}>{item.arab}</Text>
            <Text style={styles.translation}>{item.id}</Text>
          </View>
        )}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { flexGrow: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  hadithContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 2,
  },
  hadithText: { fontSize: 18, marginBottom: 10, textAlign: 'right' },
  translation: { fontSize: 16, color: '#555', textAlign: 'left' },
});
