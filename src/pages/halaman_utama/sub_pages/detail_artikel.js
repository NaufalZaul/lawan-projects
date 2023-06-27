import { useLocation } from "react-router-dom"

export default function DetailArtikel() {
  const { state } = useLocation();
  return (
    <div className="p-5">
      <div className="row bg-primary rounded mb-5">
        <div className="col-6 p-0">
          <img
            className="w-100 object-fit-cover rounded-start"
            src={`${state.image}`}
            alt=""
          />
        </div>
        <div className="col-6 d-flex align-items-center text-white">
          <h2>{state.artikel.dataValue.judul}</h2>
        </div>
      </div>
      <article className="">{state.artikel.dataValue.artikel}</article>
    </div>
  )
};
