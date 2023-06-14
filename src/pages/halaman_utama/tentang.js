export default function Tentang() {
  return (
    <div class="">
      <div class="position-relative w-100 min-vh-100 row align-items-end">
        <div class="position-absolute w-50 top-0 start-0 end-0 m-auto mt-5 text-center row">
          <h1 class="semi-heading-1">Lawan!</h1>
          <p class="text-style-label">Lawan dan laporkan tindak kekerasan</p>
        </div>
        <img className="w-100" src="./images/mockup.png" alt="" />
      </div>

      <div class="w-75 m-auto my-5 text-center">
        <p class="normal-heading-3">Merupakan aplikasi keluaran tahun 2023 yang dirancang dan dibangun untuk penanganan kekerasan sosial di Kota Batam. Aplikasi ini membantu mempermudah korban dalam pelaporan tindak kekerasan sosial. Selain itu merupakan aplikasi untuk memudahkan kepolidian dalam mengelola berkas.</p>
      </div>

      <div class="mt-5">
        <h3 class="w-25 semi-heading-3 m-auto p-3 bg-blue text-white text-center rounded-3">Visi</h3>

        <div class="w-75 d-flex justify-content-center align-items-center shadow m-auto mt-4 vision">
          <span class="rounded-start bg-secondary vertical-amber "></span>
          <p class="py-3 text-style-label text-center">Membantu masyarakat Kota Batam dalam misi pelaporan tindak kekerasan demi mencapai kesejahteraan hidup.</p>
          <span class="rounded-end bg-secondary vertical-amber "></span>
        </div>

        <h3 class="w-25 semi-heading-3 m-auto p-3 bg-blue text-white text-center rounded-3">Misi</h3>

        <div class="w-50 d-flex justify-content-center align-items-center shadow-sm m-auto mt-4 rounded-3 vision">
          <span class="rounded-start bg-secondary vertical-amber "></span>
          <div class="row align-items-center">
            <h1 class="col-2 semi-heading-1 text-end">01 |</h1>
            <p class="col py-3 text-style-label">Menyediakan sarana pelaporan kekerasan dalam bentuk aplikasi</p>
          </div>
        </div>

        <div class="w-50 d-flex justify-content-center align-items-center shadow-sm m-auto mt-4 rounded-3 vision">
          <div class="row align-items-center">
            <h1 class="col-2 semi-heading-1 text-end">02 |</h1>
            <p class="col py-3 text-style-label">Membantu upaya pencegahan dan penanganan atas berbagai tindak kekerasan</p>
          </div>
          <span class="rounded-end bg-secondary vertical-amber "></span>
        </div>
        <div class="w-50 d-flex justify-content-center align-items-center shadow-sm m-auto mt-4 rounded-3 vision">
          <span class="rounded-start bg-secondary vertical-amber "></span>
          <div class="row align-items-center">
            <h1 class="col-2 semi-heading-1 text-end">03 |</h1>
            <p class="col py-3 text-style-label">Memberikan edukasi dan informasi terkait pencegahan serta penanganan kekerasan</p>
          </div>
        </div>
      </div>

      <div class="m-auto text-center">
        <h2 class="semi-heading-2">Alur Pelaporan</h2>
        <div class="row grooves">
          <div class="col position-relative mx-1 d-flex justify-content-center align-items-center border rounded-3">
            <div class="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 class="bold-heading-1 m-0">1</h1>
            </div>
            <h3 class="normal-heading-3">Buat Laporan</h3>
          </div>
          <div class="col position-relative mx-1 d-flex justify-content-center align-items-center border rounded-3">
            <div class="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 class="bold-heading-1 m-0">2</h1>
            </div>
            <h3 class="normal-heading-3">Laporan diverifikasi</h3>
          </div>
          <div class="col position-relative mx-1 d-flex justify-content-center align-items-center border rounded-3">
            <div class="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 class="bold-heading-1 m-0">3</h1>
            </div>
            <h3 class="normal-heading-3">Laporan diproses</h3>
          </div>
          <div class="col position-relative mx-1 d-flex justify-content-center align-items-center border rounded-3">
            <div class="position-absolute bg-blue text-white py-2 px-4 rounded-circle">
              <h1 class="bold-heading-1 m-0">4</h1>
            </div>
            <h3 class="normal-heading-3">Laporan selesai</h3>
          </div>
        </div>
      </div>


    </div>
  )
};
