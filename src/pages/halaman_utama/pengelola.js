import { Link } from 'react-router-dom'

export default function Pengelola() {
  return (
    <div class="">
      <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="container text-center text-md-left" data-aos="fade-up">
          <h1>Kepolisian Republik Indonesia</h1>
          <Link to="/login">
            <button type="submit" className="btn btn-get-started scrollto">Pengelola</button>
          </Link>
        </div>
      </section>

      <main id="main" className='w-100 row header justify-content-center align-content-center align-items-center'>
        <div class="col-5">
          <h2 class="card-title semi-heading-2 text-blue">Polsek (Kepolisian Sektor)</h2>
          <p class="card-text text-style-label">Kami bekerja sama dengan kepolisian republik indonesia terutama kepolisian sektor yang ada di kota Batam, nantinya laporan yang masuk akan dikelola oleh polsek di masing masing wilayah pelapor.</p>
        </div>
        <div class="col-5">
          <img className='rounded-3' src="./images/Rectangle-818.png" alt="" />
        </div>
      </main>
    </div>
  )
};
