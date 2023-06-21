import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const PrintPDF = () => (
  <div class="p-5">
    <div class="text-center border-bottom">
      <img class="mb-3" src="assets/img/logo-large.png" alt="" />
      <div class="d-flex justify-content-center">
        <p class="mx-2">Telp : 0123456789</p>
        <p class="mx-2">Email : lawan@gmail.com</p>
      </div>
    </div>

    <p class="text-center my-3">LAPORAN KEKERASAN</p>

    <div class="border-bottom">
      <p><strong>Biodata Pelapor</strong></p>
      <div class="my-4">
        <img src="assets/img/foto.png" alt="" class="" />
      </div>
      <div class="row">
        <p class="col-1">Nama</p>
        <p class="col">: Zulkarnain</p>
      </div>
      <div class="row">
        <p class="col-1">NIK</p>
        <p class="col">: 12413523523413</p>
      </div>
      <div class="row">
        <p class="col-1">TTL</p>
        <p class="col">: Batam, 23 Januari 1985</p>
      </div>
      <div class="row">
        <p class="col-1">Telp</p>
        <p class="col">: 34234234</p>
      </div>
      <div class="row">
        <p class="col-1">Telp</p>
        <p class="col">: 34234234</p>
      </div>
      <div class="row">
        <p class="col-1">Alamat</p>
        <p class="col">
          : Tiban Mas blok AAA 100, Rt 02, Rw 05, TibanLama, Sekupang, Batam
        </p>
      </div>
    </div>

    <div class="">
      <p><strong>Jenis Laporan</strong></p>
      <p>Pembulian di institusi Teknologi Batam</p>
      <p></p>
      <p><strong>Jenis Kekerasan</strong></p>
      <p>Pembulian</p>
      <p><strong>Lokasi Kejadian</strong></p>
      <p>Instusi Teknologi Batam</p>
      <p><strong>Tanggal Kejadian</strong></p>
      <p>Senin, 22 April 2023</p>
      <p><strong>Deskripsi</strong></p>
      <p>
        Saya mendapatkan kekerasan secara fisik maupun psikis di sekolah, saya
        sering di buli dan di hajar oleh teman kelas saya sendiri hingga saya
        mendapatkan luka lebam yang sangat serius. saya ingin bisa belajar
        dengan tenang dan saya ingin menjadi seperti murid normal lainnya yang
        tidak kena buli, dan saya harap yang membuli saya dapat di proses dan
        ditindak lanjuti dan diberi arahan langsung oleh pihak yang berwajib
        agar tidak ada lagi korban yang akan bernasip sama seperti saya.
      </p>
      <p><strong>Bukti</strong></p>
      <div class="row row-cols-4">
        <img src="assets/img/image 38.png" alt="" class="my-2" />
        <img src="assets/img/image 38.png" alt="" class="my-2" />
        <img src="assets/img/image 38.png" alt="" class="my-2" />
        <img src="assets/img/image 38.png" alt="" class="my-2" />
        <img src="assets/img/image 38.png" alt="" class="my-2" />
        <img src="assets/img/image 38.png" alt="" class="my-2" />
        <img src="assets/img/image 38.png" alt="" class="my-2" />
      </div>
    </div>
  </div>
);