import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const HadithCard = ({ kitab = 'bukhari', nomor = 52 }) => {
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHadith = async () => {
      try {
        const res = await axios.get(`https://api.hadith.gading.dev/books/${kitab}/${nomor}`);
        setHadith(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHadith();
  }, [kitab, nomor]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007AFF" />;
  }

  if (!hadith) {
    return <Text>Gagal memuat hadits.</Text>;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{hadith.name} No. {hadith.number}</Text>
      <Text style={styles.arab}>{hadith.arab}</Text>
      <Text style={styles.id}>{hadith.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  arab: {
    fontSize: 20,
    textAlign: 'right',
    marginBottom: 12,
    color: '#000',
    fontFamily: 'serif',
  },
  id: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
});

export default HadithCard;
