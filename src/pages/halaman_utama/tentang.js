
export default function Tentang() {
  return (
    <div className="">


      <div className="w-100 header row justify-content-around">
        <div className="col-5 row align-content-center ps-5"
          style={{ height: 'inherit' }}>
          <h1 className="semi-heading-1">Lawan.id</h1>
          <p className="text-style-label">Lawan dan laporkan tindak kekerasan</p>
          <img className="w-25 rounded-start-3" src="./images/Google Play.png" alt="" />
        </div>
        <div className="col-6" style={{ height: 'inherit' }}>
          <img className="object-fit-cover" src="./images/mockup-tentang.png" alt="" style={{ height: 'inherit' }} />
        </div>
      </div>

      <div className="w-75 m-auto my-5 row align-content-center justify-content-center text-center" style={{ minHeight: '50vh' }}>
        <h3 className="w-25 semi-heading-3 p-2 mb-5 rounded-3 border-amber">Aplikasi</h3>
        <p className="normal-heading-3">Lawan.id merupakan aplikasi keluaran tahun 2023 yang dirancang dan dibangun untuk penanganan kekerasan sosial di Kota Batam. Aplikasi ini membantu mempermudah korban dalam pelaporan tindak kekerasan sosial. Selain itu aplikasi ini membantu memudahkan kepolisian dalam mengelola berkas laporan.</p>
      </div>

      <div className="my-5">
        <h3 className="w-25 semi-heading-3 m-auto p-3 text-center rounded-3 border-blue">Visi</h3>

        <div className="w-75 d-flex justify-content-center align-items-center shadow m-auto mt-4 mb-5 vision">
          <span className="rounded-start bg-secondary vertical-amber "></span>
          <p className="py-3 text-style-label text-center">Membantu masyarakat Kota Batam dalam misi pelaporan tindak kekerasan demi mencapai kesejahteraan hidup.</p>
          <span className="rounded-end bg-secondary vertical-amber "></span>
        </div>

        <h3 className="w-25 semi-heading-3 m-auto p-3 text-center rounded-3 border-amber">Misi</h3>

        <div className="w-50 d-flex justify-content-center align-items-center shadow-sm m-auto mt-4 rounded-3 vision">
          <span className="rounded-start bg-secondary vertical-blue "></span>
          <div className="row align-items-center">
            <h1 className="col-2 semi-heading-1 text-end">01 |</h1>
            <p className="col py-3 text-style-label">Menyediakan sarana pelaporan kekerasan dalam bentuk aplikasi</p>
          </div>
        </div>

        <div className="w-50 d-flex justify-content-center align-items-center shadow-sm m-auto mt-4 rounded-3 vision">
          <div className="row align-items-center">
            <h1 className="col-2 semi-heading-1 text-end">02 |</h1>
            <p className="col py-3 text-style-label">Membantu upaya pencegahan dan penanganan atas berbagai tindak kekerasan</p>
          </div>
          <span className="rounded-end bg-secondary vertical-blue "></span>
        </div>
        <div className="w-50 d-flex justify-content-center align-items-center shadow-sm m-auto mt-4 rounded-3 vision">
          <span className="rounded-start bg-secondary vertical-blue "></span>
          <div className="row align-items-center">
            <h1 className="col-2 semi-heading-1 text-end">03 |</h1>
            <p className="col py-3 text-style-label">Memberikan edukasi dan informasi terkait pencegahan serta penanganan kekerasan</p>
          </div>
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


    </div>
  )
};
