import { ref, set, child, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { database } from "./firebase";
import { v4 } from "uuid";

export function tambahDataPengelola({ username, pass }) {
  set(child(ref(database), 'polsek/' + v4()), {
    nama: "Admin Polsek",
    username: username,
    pass: pass
  })
};

export function ubahDataPengelola(datas) {
  update(child(ref(database), 'polsek/' + datas.idData), {
    username: datas.usernamebaru
  })
}

export function hapusDataPengelola({ idData }) {
  set(child(ref(database), "polsek/" + idData), {});
}