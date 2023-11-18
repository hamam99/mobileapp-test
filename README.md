This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### QUESTION

#### CODE

- Fitur sudah berjalan sesuai requirement. karena state management nya tidak di set persist maka setiap restart app akan kembali ke default data (comment dan vote nya kosong)
- Masih banyak code yang belum clean code

#### A. (10%) Topik: Komunikasi dengan Manajer Produk.

1. bagaimana jumlah comments,upvotes dan downvotes akan disimpan? akan di simpan di api atau di simpan di user ?
2. Bagaimana melakukan update jumlah comments,upvotes dan downvotes akan di synckronisasikan, apakah harus ada loading atau melakukan sync di background?
3. apakah text feed hanya mendukung karakter a-z dan 0-9 atau mendukung karakter yang lain juga?
4. Apakah more juga akan di halaman feeds atau hanaya di detail post saja?
5. Jika ada fitur more apakah ada fitur less?
6. Bagaimana jika image tidak terload apakah perlu menampilkan placeholder?
7. apakah ada minimum dan maximum vote?

#### C1 - (20%):

A. Jelaskan struktur data yang akan Anda gunakan.

- Struktur data graph

B. Bagaimana Anda akan menangani kasus-kasus ekstrim, misalnya tidak ada pengguna/komunitas yang terkait/terkoneksi atau terlalu banyak pengguna/komunitas yang terkait/terkoneksi?

- Jika terlalu banyak pengguna yang terkoneksi maka perlu menambahkan kriteria lain seperti mengikuti halaman yang sama atau apa, dan membatasi saran jumlah pengguna
- Jika tidak ada user terkait, tampilkan pesan "Kami bisa menyarankan teman tapi ijin kami mengakses kontak anda". Dari nomor kontak yang di akses mungkin ada nomor kontak yang sudah terdaftar.

C. Bagaimana Anda akan menguji fitur ini?

- tentukan case yang akan di test, case ini misal menggunakan area tempat tinggal sebagai salah satu kriteria :
- Mencari user 2 user yang bertempat tinggal di area yagn sama misal yogyakarta dan 1 user yang berada di luar radius misal di Magelang

#### C2- Logika (20%):

Algoritma yang dapat digunakan untuk menyarankan “orang yang mungkin Anda kenal” adalah Collaborative Filtering. Collaborative Filtering adalah teknik yang digunakan untuk merekomendasikan item berdasarkan preferensi pengguna. Dalam hal ini, item yang direkomendasikan adalah pengguna yang mungkin dikenal oleh pengguna.

Pertama mengumpulkan data pengguna yang bisa digunakan untuk menentukan kriteria orang yang mungkin di kenal seperti :
a. lokasi user (tempat tinggal user, dll)
b. halaman yang di ikuti
c. feed yang pernah di like
d. jenis kelamin

kemudian data di olah menggunakan algoritma Collaborative Filtering dan akan di dapatkan rekomendasi.
