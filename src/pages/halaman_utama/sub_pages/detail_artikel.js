export default function DetailArtikel({ artikel }) {
  console.log(artikel.image);
  return (
    <div class="p-5">
      <div class="row bg-primary rounded mb-5">
        <div class="col-6 p-0">
          <img
            class="w-100 object-fit-cover rounded-start"
            src={`${artikel.image}`}
            alt=""
          />
        </div>
        <div class="col-6 d-flex align-items-center">
          <h2>{artikel.judul}</h2>
        </div>
      </div>
      <article class="">{artikel.artikel}</article>
    </div>
  )
};
