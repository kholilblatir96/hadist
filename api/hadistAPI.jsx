// api/hadistAPI.jsx
export const getMultipleHadistBooks = async ({ hadistRiwayat, number }) => {
  try {
    const requests = hadistRiwayat.map((riwayat) =>
      fetch(`https://api.hadith.gading.dev/books/${riwayat}?range=${number }`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Gagal fetch riwayat : ${riwayat}`);
          }
          return res.json();
        })
    );
    
    const results = await Promise.all(requests);
    return results;
  } catch (error) {
    console.error("Error fetching multiple hadiths:", error);
    return [];
  }
};
