// app/detailHadist.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailHadist() {
  const { riwayatId, riwayatName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{riwayatName}</Text>
      <Text>Riwayat ID: {riwayatId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
