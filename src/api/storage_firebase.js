import { ref, getDownloadURL, listAll } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js'
import { storage } from './firebase';

export default function StorageImage() {
  const arrProfil = [];
  const arrBukti = [];
  const arrArtikel = [];

  listAll(ref(storage, 'profil/')).then((res) => {
    res.items.forEach(e => {
      getDownloadURL(e).then(a => {
        arrProfil.push(a)
      })
    })
  })

  listAll(ref(storage, 'bukti/')).then((res) => {
    res.items.forEach(e => {
      getDownloadURL(e).then(a => {
        arrBukti.push(a)
      })
    })
  })

  listAll(ref(storage, 'artikel/')).then((res) => {
    res.items.forEach(e => {
      getDownloadURL(e).then(a => {
        arrArtikel.push(a)
      })
    })
  })
  return { arrProfil, arrBukti, arrArtikel };
}