import DataMaps from "../../api/data_maps"

export default function Kontak() {
  const dataMaps = DataMaps()
  // useEffect(() => {
  //   const screenSize = screen.width,
  //     iframeMap = document.querySelectorAll("iframe");
  //   for (let frameMap of iframeMap) {
  //     if (screenSize < 400) frameMap.setAttribute("width", "265");
  //   }

  // return () => {
  //   second
  // }
  // }, [])

  return (
    <div class="">
      <div class="container mx-auto py-5 jumbotron">
        <p class="text-center">
          Dapatkan informasi lainnya di sosial media kami, dan anda dapat
          menghubungi pihak berwajib yang tertera di bawah ini
        </p>
      </div>
      <div class="container mx-auto py-5">
        <h2 class="text-center fs-6 fw-bold">Kunjungi Kami Di</h2>
        <div class="d-flex flex-wrap justify-content-center gap-5 mt-4">
          <img width="80" src="./icon/instagram.svg" alt="" />
          <img width="80" src="./icon/facebook.svg" alt="" />
          <img width="80" src="./icon/twitter.svg" alt="" />
          <img width="80" src="./icon/youtube.svg" alt="" />
        </div>
      </div>
      <div class="container py-3">
        <p class="fw-semibold">Kontak Polsek Wilayah Batam</p>
        <div class="row">
          {
            dataMaps.map(val => (
              <div class="col-sm-6 col-lg-4">
                <div class="card border-0">
                  <div class="card-body">
                    <p class="fs-6 fw-semibold mb-3">{val.nama}</p>
                    <div class="hstack gap-3">
                      <i class="bi bi-geo-alt"></i>
                      <p>{val.alamat}</p>
                    </div>
                    <div class="hstack gap-3 mb-4">
                      <i class="bi bi-telephone"></i>
                      <p>{val.telp}</p>
                    </div>
                    <iframe
                      src={val.maps}
                      width="353"
                      height="221"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};
