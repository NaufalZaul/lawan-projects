import { ref, onValue, push, update, get, put, set, child, onUpdate } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'
import { database } from './firebase';


// const refDB = ref(database, 'coba/');
// export function updateData(dataId, status) {

// -NYRRNTtbA5x9FNRygGl


// export function updateData(dataId, id_pelapor, id_polsek, isi_laporan, jenis_kekerasan, judul_laporan, lokasi_kejadian, status_laporan, tanggal_kejadian, unggah_bukti) {
export function updateData(dataId, dataPengelola) {
  // console.log(dataId)
  // console.log(dataPengelola)

  // const refDB = ref(database);

  // set(child(ref(database), 'coba/' + dataId), {

  //   id_pelapor: id_pelapor,
  //   id_polsek: id_polsek,
  //   isi_laporan: isi_laporan,
  //   jenis_kekerasan: jenis_kekerasan,
  //   judul_laporan: judul_laporan,
  //   lokasi_kejadian: lokasi_kejadian,
  //   status_laporan: status_laporan,
  //   tanggal_kejadian: tanggal_kejadian,
  //   unggah_bukti: unggah_bukti,
  // }).then((e) => {
  //   console.log(e);
  // })

}

export default function SistemDataPengelola() {
  const dataArr = [];
  // const idArr = []
  const refDB = ref(database, 'laporan/');

  // polseklububaja polseklububaja457212

  onValue(refDB, (dt) => {
    const data = dt.val();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        const newData = {
          [`${key}`]: element
        }
        dataArr.push(element)
        // console.log(newData);
      }
    }
  })
  return dataArr;
};
