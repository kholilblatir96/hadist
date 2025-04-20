// https://api.hadith.gading.dev/books/{name}/{number}

interface Hadist {
  hadistRiwayat: string;
  range: number;
}

const getHadsitBooks = async ({ hadistRiwayat, range }: Hadist) => {
  try {
    const response = await fetch(`https://api.hadith.gading.dev/books/${hadistRiwayat}/${range}`);
    if (!response.ok) {
      throw new Error(`gagal mengambil data ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
