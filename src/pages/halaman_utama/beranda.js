import { Link } from "react-router-dom";

export default function Beranda() {
  return (
    <div className="px-5">
      <div className="position-relative row align-items-end w-100 m-auto mb-5 header">
        <div className="position-absolute w-50 top-0 start-0 end-0 m-auto mt-5 text-center">
          <h1 className="semi-heading-1">Lawan!</h1>
          <h2 className="normal-heading-2 m-4">
            Membantu membela kesejahteraan korban tindak{" "}
            <span className="text-danger">kekerasan</span> dengan melaporkan
          </h2>
          <a href="#label">
            <button type="submit" className="btn text-style-button button-amber">
              Jelajahi
            </button>
          </a>
        </div>

        <div className="col-4 d-flex flex-row-reverse align-items-end">
          <span className="rounded-3 bg-secondary dump-box-height horizontal-blue "></span>
          <div className="d-flex flex-column-reverse align-items-end p-0">
            <img
              className="rounded-3 dump-image-height me-4"
              src="./images/unsplash_NPmR0RblyhQ.jpg"
              alt=""
            />
            <span className="rounded-3 bg-secondary mb-4 dump-box-width vertical-amber me-4"></span>
          </div>
        </div>
        <div className="col">
          <img className="w-100 rounded-3 dump-image-width" src="./images/image-33.jpg" alt="" />
        </div>
        <div className="col-4 d-flex align-items-end">
          <span className="rounded-3 bg-secondary mt-4 dump-box-height horizontal-amber"></span>
          <div className="d-flex flex-column align-items-end justify-content-end p-0">
            <img className="rounded-3 dump-image-height ms-4" src="./images/image-38.jpg" alt="" />
            <span className="rounded-3 bg-secondary mt-4 dump-box-width vertical-blue "></span>
          </div>
        </div>
      </div>

      <div className="p-5 text-center text-white rounded-4 bg-blue" id="label">
        <p className="mb-3 text-style-navbar objective">
          Didedikasikan untuk masyarakat Kota Batam yang berperang dalam kesejahteraan fisik dan
          psikis
        </p>
        <span className="text-style-label">Tertanda Lawan!</span>
      </div>

      <div className="row align-items-center support ">
        <div className="col-2">
          <img className="rounded-3 support-image-one" src="./images/image-41.jpg" alt="" />
        </div>
        <div className="col-6 px-5">
          <p className="normal-heading-3">
            Tidak ada yang lebih <span className="text-danger"> berbahaya </span> daripada{" "}
            <span className="text-danger">kekerasan</span> yang dilakukan oleh orang-orang yang{" "}
            <span className="text-danger"> bermaksud buruk</span> untuk tujuan yang menguntungkan
          </p>
          <Link to="/edukasi">
            <button type="submit" className="btn text-style-button button-amber">
              Pelajari Selengkapnya
            </button>
          </Link>
        </div>
        <div className="col-4">
          <img className="rounded-3 support-image-two" src="./images/image-42.png" alt="" />
        </div>
      </div>

      <div className="row w-100 m-auto justify-content-center my-5">
        <div className="col-3 mt-5 mx-3 p-3 rounded-3 text-center border-amber">
          <div className="my-4">
            <img className="w-25 rounded-3" src="./images/kesejahteraan.png" alt="" />
          </div>
          <h5 className="text-uppercase text-style-label">Kesejahteraan</h5>
          <p className="text-style-paragraf mb-4">
            Membantu membela kesejahteraan korban tindakan kekerasan dengan membantu melaporkan.
          </p>
        </div>
        <div className="col-3 h-100 mx-3 p-3 rounded-3 text-center border-amber">
          <div className="my-4">
            <img className="w-25 rounded-3" src="./images/perlindungan.png" alt="" />
          </div>
          <h5 className="text-uppercase text-style-label">Perlindungan</h5>
          <p className="text-style-paragraf mb-4">
            Membantu memberi perlindungan dari pihak kepolisian, lembaga sosial, atau pihak lainnya.
          </p>
        </div>
        <div className="col-3 mt-5 mx-3 p-3 rounded-3 text-center border-amber">
          <div className="my-4">
            <img className="w-25 rounded-3" src="./images/kesehatan.png" alt="" />
          </div>
          <h5 className="text-uppercase text-style-label">Kesehatan</h5>
          <p className="text-style-paragraf mb-4">
            Membantu memberi layanan kesehatan meliputi pemeriksaan, tindakan, dan perawatan medis.
          </p>
        </div>
      </div>
      <div className="row align-items-center w-100 m-auto my-5 rounded-3 quotes bg-blue">
        <div className="col-6 p-0">
          <img className="w-100 rounded-start-3 " src="./images/unsplash_DRzYMtae-vA.png" alt="" />
        </div>
        <div className="col-6 text-white px-5">
          <h5 className="me-5 normal-heading-3">
            " Kekerasan bagaikan rumput liar yang tidak akan mati dimusim kemarau "
          </h5>
          <Link to="/tentang">
            <button type="submit" className="btn text-style-button button-amber mt-3">
              Laporan Sekarang
            </button>
          </Link>
        </div>
      </div>
      <div className="m-auto text-center p-5">
        <h2 className="semi-heading-2 my-5">Alur Pelaporan</h2>
        <div className="row grooves px-5 py-3 justifi-content-center">
          <div className="col position-relative mx-1 d-flex justify-content-center align-items-center rounded-3 border-amber">
            <div className="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 className="normal-heading-3 m-0">1</h1>
            </div>
            <h3 className="text-style-label">Buat Laporan</h3>
          </div>
          <div className="col position-relative mx-1 d-flex justify-content-center align-items-center rounded-3 border-amber">
            <div className="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 className="normal-heading-3 m-0">2</h1>
            </div>
            <h3 className="text-style-label">Laporan diverifikasi</h3>
          </div>
          <div className="col position-relative mx-1 d-flex justify-content-center align-items-center rounded-3 border-amber">
            <div className="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 className="normal-heading-3 m-0">3</h1>
            </div>
            <h3 className="text-style-label">Laporan diproses</h3>
          </div>
          <div className="col position-relative mx-1 d-flex justify-content-center align-items-center rounded-3 border-amber">
            <div className="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 className="normal-heading-3 m-0">4</h1>
            </div>
            <h3 className="text-style-label">Laporan selesai</h3>
          </div>
        </div>
      </div>
      <div className="position-relative py-5 mb-5">
        <div className="-lawan position-absolute z-2 w-100 fw-bold py-2 px-4 text-center rounded">
          <p className="text-line mb-0">
            - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! -
            Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan!
            -
          </p>
        </div>
        <div className="lawan position-absolute z-1 w-100 fw-bold py-2 px-4 text-center rounded">
          <p className="text-line mb-0">
            - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! -
            Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan! - Lawan!
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center py-5 my-5">
        <div className="">
          <img className="w-75 rounded-start-3 " src="./images/mockup-beranda.png" alt="" />
        </div>
        <div className="w-50">
          <h1 className="semi-heading-1">Ayo Lawan Kekerasan di Kota Batam</h1>
          <p className="my-4 normal-heading-3">Download Aplikasinya sekarang</p>
          <img className=" rounded-start-3 " src="./images/Google Play.png" alt="" />
        </div>
      </div>
    </div>
  );
}
