import DataMaps from "../../api/data_maps";

export default function Kontak() {
  const dataMaps = DataMaps();
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
    <div className="">
      <div className="container mx-auto py-5 w-50">
        <h2 className="text-center normal-heading-2">
          Dapatkan informasi lainnya di sosial media kami, dan anda dapat menghubungi pihak berwajib
          yang tertera di bawah ini
        </h2>
      </div>
      <div className="container mx-auto py-5">
        <h2 className="text-center semi-heading-2">Kunjungi Kami di</h2>
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-4">
          <div className="text-center">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/fluency/96/instagram-new.png"
              alt="instagram-new"
            />
            <p className="text-style-paragraf">@lawan.id.batam</p>
          </div>
          <div className="text-center">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/color/96/facebook.png"
              alt="facebook"
            />
            <p className="text-style-paragraf">Lawan id Batam</p>
          </div>
          <div className="text-center">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/color/96/twitter-squared.png"
              alt="twitter-squared"
            />
            <p className="text-style-paragraf">Lawan id Batam</p>
          </div>
          <div className="text-center">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/color/96/youtube-play.png"
              alt="youtube-play"
            />
            <p className="text-style-paragraf">Lawan id Batam</p>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <p className="fw-semibold">Kontak Polsek Wilayah Batam</p>
        <div className="row">
          {dataMaps.map((val) => (
            <div className="col-sm-6 col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <h3 className="mb-3 text-style-label">{val.nama}</h3>
                  <div className="gap-2">
                    <i className="bi bi-geo-alt"></i>
                    <p className="text-style-paragraf">{val.alamat}</p>
                  </div>
                  <div className="gap-2 mb-4">
                    <i className="bi bi-telephone"></i>
                    <p className="text-style-paragraf">{val.telp}</p>
                  </div>
                  <iframe
                    title="iframe"
                    src={val.maps}
                    width="353"
                    height="221"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
