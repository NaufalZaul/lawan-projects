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
      <div class="container mx-auto py-5 w-50">
        <h2 class="text-center normal-heading-2">
          Dapatkan informasi lainnya di sosial media kami, dan anda dapat
          menghubungi pihak berwajib yang tertera di bawah ini
        </h2>
      </div>
      <div class="container mx-auto py-5">
        <h2 class="text-center semi-heading-2">Kunjungi Kami di</h2>
        <div class="d-flex flex-wrap justify-content-center gap-5 mt-4">
          <div class="text-center">
            <img width="80" height="80" src="https://img.icons8.com/fluency/96/instagram-new.png" alt="instagram-new" />
            <p class="text-style-paragraf">@lawan.id.batam</p>
          </div>
          <div class="text-center">
            <img width="80" height="80" src="https://img.icons8.com/color/96/facebook.png" alt="facebook" />
            <p class="text-style-paragraf">Lawan id Batam</p>
          </div>
          <div class="text-center">
            <img width="80" height="80" src="https://img.icons8.com/color/96/twitter-squared.png" alt="twitter-squared" />
            <p class="text-style-paragraf">Lawan id Batam</p>
          </div>
          <div class="text-center">
            <img width="80" height="80" src="https://img.icons8.com/color/96/youtube-play.png" alt="youtube-play" />
            <p class="text-style-paragraf">Lawan id Batam</p>
          </div>

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
                    <h3 class="mb-3 text-style-label">{val.nama}</h3>
                    <div class="gap-2">
                      <i class="bi bi-geo-alt"></i>
                      <p className="text-style-paragraf">{val.alamat}</p>
                    </div>
                    <div class="gap-2 mb-4">
                      <i class="bi bi-telephone"></i>
                      <p className="text-style-paragraf">{val.telp}</p>
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
