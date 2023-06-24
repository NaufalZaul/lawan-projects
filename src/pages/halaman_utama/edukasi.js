import { useEffect } from "react";
import { artikel } from "../../api/api";
import { Link } from "react-router-dom";

export default function Edukasi() {
  // useEffect(() => {

  //   let textLines = document.querySelectorAll(".text-line"),
  //     textShort = "";
  //   const deviceSize = screen.width,
  //     lawan = document.querySelector(".lawan"),
  //     lawanReverse = document.querySelector(".-lawan");
  //   if (deviceSize < 400) {
  //     lawan.style.transform = "rotate(10deg)";
  //     lawanReverse.style.transform = "rotate(-10deg)";
  //     for (let textLine of textLines) {
  //       const limit = (string = "", limit) => string.substring(0, limit);
  //       textShort = limit(textLine.textContent, 37);
  //       textLine.innerHTML = textShort;
  //     }
  //   }
  // })
  return (
    <div className="">
      <div className="hstack bg-black flex-column flex-lg-row">
        <img src="./images/bekardo.png" alt="" />
        <p className="text-white ms-lg-5">
          Tidak ada yang lebih <span className="text-danger">berbahaya</span> dari
          pada <span className="text-danger">kekerasan</span> yang dilakukan oleh
          orang-orang yang <span className="text-danger">bermaksud buruk</span> untuk
          tujuan yang menguntungkan.
        </p>
      </div>
      <div className="d-flex justify-content-center flex-column flex-lg-row gap-5 my-5 pt-5 w-75 mx-auto">
        <div className="d-flex flex-wrap gap-3 w-50">
          <img width="220" src="./images/bekar1.png" alt="" />
          <img width="220" src="./images/bekar2.png" alt="" />
          <img width="220" src="./images/bekar3.png" alt="" />
          <img width="220" src="./images/bekar4.png" alt="" />
        </div>
        <div>
          <h1 className="fw-semibold fs-4 text-primary mb-4">
            Menghindari diri dari kekerasan
          </h1>
          <ul className="border border-2 border-primary rounded-3">
            <li className="py-2 px-3">Mengontrol diri sendiri</li>
          </ul>
          <ul className="border border-2 border-warning rounded-3">
            <li className="py-2 px-4">Menahan emosi agar tidak mudah marah</li>
          </ul>
          <ul className="border border-2 border-primary rounded-3">
            <li className="py-2 px-4">Selalu berada di lingkungan yang baik</li>
          </ul>
          <ul className="border border-2 border-warning rounded-3">
            <li className="py-2 px-4">Melakukan hal-hal positif</li>
          </ul>
        </div>
      </div>
      <div className="position-relative py-5 my-5">
        <div className="-lawan position-absolute z-2 w-100 fw-bold py-2 px-4 text-center rounded">
          <p className="text-line mb-0">
            - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! -
            Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan!
            - Lawan! - Lawan! - Lawan! - Lawan! -
          </p>
        </div>
        <div className="lawan position-absolute z-1 w-100 fw-bold py-2 px-4 text-center rounded">
          <p className="text-line mb-0">
            - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! -
            Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan!
            - Lawan! - Lawan! - Lawan!
          </p>
        </div>
      </div>

      <div className="w-75 mx-auto pt-5 mt-5">
        <div className="d-flex gap-5 flex-column flex-lg-row align-items-center align-items-lg-end justify-content-center">
          <div className="sikitbangda-1">Selamatkan Diri</div>
          <div className="sikitbangda-2 border border-5 rounded-4 border-primary">
            <h5 className="fw-bold">Yang Harus dilakukan !</h5>
            <p className="mb-0">
              Terdapat beberapa hal yang harus dilakukan oleh korban kekerasan
            </p>
          </div>
          <div className="sikitbangda-3">Segera melapor</div>
        </div>
        <div className="d-flex gap-5 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center mt-5">
          <div className="box border border-4 border-warning"></div>
          <div className="sikitbangda-3">Hubungi orang terdekat</div>
          <div className="sikitbangda-1">Simpan barang bukti</div>
          <div className="box border border-4 border-primary"></div>
        </div>
      </div>

      <div className="container-md mx-auto mt-5 pt-5">
        <div className="bg-primary p-2 p-lg-5 rounded-4">
          <h3 className="text-center text-light mb-lg-5 fs-4">
            Undang-undang kekerasan
          </h3>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne" >
                  Pasal 170 KUHP
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ol>
                    <li>
                      Barang siapa dengan terang-terangan dan dengan tenaga
                      bersama menggunakan kekerasan terhadap orang atau barang,
                      diancam dengan pidana penjara paling lama lima tahun enam
                      bulan.
                    </li>
                    <li>
                      Yang bersalah diancam:
                      <ol>
                        <li>
                          Dengan pidana penjara paling lama tujuh tahun, jika ia
                          dengan sengaja menghancurkan barang atau jika kekerasan
                          yang digunakan mengakibatkan luka-luka;
                        </li>
                        <li>
                          Dengan pidana penjara paling lama sembilan tahun, jika
                          kekerasan mengakibatkan luka berat; 3. dengan pidana
                          penjara paling lama dua belas tahun, jika kekerasan
                          mengakibatkan maut.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Pasal 351 KUHP
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Pasal 289 KUHP
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse fw-semibold"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Pasal 80 (1) jo. Pasal 76 c UU 35 Tahun 2014
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Pasal 44 UU KDRT
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  UU Nomor 19 Tahun 2016
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 py-5 mx-0">
        <h2 className="mb-5 text-center fw-bold">Artikel</h2>
        {
          artikel.map((val, key) => (
            <div className="col-lg-3">
              <Link to="/edukasi/detail_artikel"
                className="text-decoration-none"
                state={{ artikel: artikel[key] }}>
                <div className="card shadow mb-2">
                  <img
                    src={val.image}
                    className="card-img-top"
                    alt="gambar artikel 1"
                  />
                  <div className="card-body">
                    <p className="card-text">{val.judul}</p>
                  </div>
                </div>
              </Link>
            </div>

          ))
        }
      </div>
    </div>
  )
};

