export default function DetailArtikel({ artikel }) {
  console.log(artikel.image);
  return (
    <div className="p-5">
      <div className="row bg-primary rounded mb-5">
        <div className="col-6 p-0">
          <img
            className="w-100 object-fit-cover rounded-start"
            src={`${artikel.image}`}
            alt=""
          />
        </div>
        <div className="col-6 d-flex align-items-center">
          <h2>{artikel.judul}</h2>
        </div>
      </div>
      <article className="">{artikel.artikel}</article>
    </div>
  )
};
