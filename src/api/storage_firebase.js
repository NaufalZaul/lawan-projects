import { ref, getDownloadURL, listAll } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js'
import { storage } from './firebase';

export default function StorageImage() {
  const arr = [];
  const refDB = ref(storage);

  listAll(refDB).then((res) => {
    res.items.forEach(e => {
      getDownloadURL(e).then(a => {
        arr.push(a)
      })

    })

  })
  return arr;
}