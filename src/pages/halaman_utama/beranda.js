export default function Beranda() {
  return (
    <div class="px-5">
      <div class="position-relative row align-items-end w-100 m-auto mb-5 header">
        <div class="position-absolute w-50 top-0 start-0 end-0 m-auto mt-5 text-center">
          <h1 className="semi-heading-1">Lawan!</h1>
          <h2 className="normal-heading-2 m-4">Membantu membela kesejahteraan korban tindak <span className="text-danger">kekerasan</span> dengan melaporkan</h2>
          <button type="submit" className="btn text-style-button button-amber">Jelajahi</button>
        </div>

        <div class="col-4 d-flex flex-row-reverse align-items-end">
          <span class="rounded-3 bg-secondary dump-box-height horizontal-blue "></span>
          <div class="d-flex flex-column-reverse align-items-end p-0">
            <img className="rounded-3 dump-image-height me-4" src="./images/unsplash_NPmR0RblyhQ.jpg" alt="" />
            <span class="rounded-3 bg-secondary mb-4 dump-box-width vertical-amber me-4"></span>
          </div>
        </div>
        <div class="col">
          <img className="w-100 rounded-3 dump-image-width" src="./images/image-33.jpg" alt="" />
        </div>
        <div class="col-4 d-flex align-items-end">
          <span class="rounded-3 bg-secondary mt-4 dump-box-height horizontal-amber"></span>
          <div class="d-flex flex-column align-items-end justify-content-end p-0">
            <img className="rounded-3 dump-image-height ms-4" src="./images/image-38.jpg" alt="" />
            <span class="rounded-3 bg-secondary mt-4 dump-box-width vertical-blue "></span>
          </div>
        </div>
      </div>

      <div class="p-5 text-center text-white rounded-4 bg-blue">
        <p class="mb-3 text-style-navbar objective">Didedikasikan untuk masyarakat Kota Batam yang berperang dalam kesejahteraan fisik dan psikis</p>
        <span className="text-style-label">Tertanda Lawan!</span>
      </div>
      <div class="row align-items-center support ">
        <div class="col-2">
          <img className="rounded-3 support-image-one" src="./images/image-42.jpg" alt="" />
        </div>
        <div class="col-6 px-5">
          <p class="normal-heading-3">Tidak ada yang lebih <span className="text-danger"> berbahaya </span> daripada <span class="text-danger">kekerasan</span> yang dilakukan oleh orang-orang yang <span class="text-danger"> bermaksud buruk</span> untuk tujuan yang menguntungkan</p>
          <button type="submit" className="btn text-style-button button-amber">Pelajari Selengkapnya</button>
        </div>
        <div class="col-4">
          <img className="rounded-3 support-image-two" src="./images/image-42.jpg" alt="" />
        </div>
      </div>
      <div class="row w-100 m-auto justify-content-center my-5">
        <div class="col-3 mt-5 mx-3 p-3 border border-primary rounded-3 text-center bg-secondary-subtle">
          <div class="my-4">
            <img className="w-25 rounded-3" src="./images/image-34.jpg" alt="" />
          </div>
          <h5 className="text-uppercase text-style-label">kesejahteraan</h5>
          <p className="text-style-paragraf mb-4">Membantu membela kesejahteraan korban tindakan kekerasan dengan membantu melaporkan</p>
        </div>
        <div class="col-3 h-100 mx-3 p-3 border border-primary rounded-3 text-center bg-secondary-subtle">
          <div class="my-4">
            <img className="w-25 rounded-3" src="./images/image-35.jpg" alt="" />
          </div>
          <h5 className="text-uppercase text-style-label">kesejahteraan</h5>
          <p className="text-style-paragraf mb-4">Membantu membela kesejahteraan korban tindakan kekerasan dengan membantu melaporkan</p>
        </div>
        <div class="col-3 mt-5 mx-3 p-3 border border-primary rounded-3 text-center bg-secondary-subtle">
          <div class="my-4">
            <img className="w-25 rounded-3" src="./images/image-36.jpg" alt="" />
          </div>
          <h5 className="text-uppercase text-style-label">kesejahteraan</h5>
          <p className="text-style-paragraf mb-4">Membantu membela kesejahteraan korban tindakan kekerasan dengan membantu melaporkan</p>
        </div>
      </div>
      <div class="row align-items-center w-100 m-auto my-5 rounded-3 quotes bg-blue">
        <div class="col-6 p-0">
          <img className="w-100 rounded-start-3 " src="./images/unsplash_DRzYMtae-vA.jpg" alt="" />
        </div>
        <div class="col-6 text-white px-5">
          <h5 className="me-5 normal-heading-3">" Kekerasan bagaikan rumput liar yang tidak akan mati dimusim kemarau "</h5>
          <button type="submit" className="btn text-style-button button-amber mt-3">Laporan Sekarang</button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center my-5">
        <div class="">
          <img className="w-75 rounded-start-3 " src="./images/apps.jpg" alt="" />
        </div>
        <div class="w-50">
          <h1 className="semi-heading-1">Ayo Lawan Kekerasan di Kota Batam</h1>
          <p className="my-4 normal-heading-3">Download Aplikasinya sekarang</p>
          <img className="w-25 rounded-start-3 " src="./images/Google Play.png" alt="" />
        </div>
      </div>
    </div>
  )
};

