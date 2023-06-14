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

      <main id="main">
        <section id="" class="">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Polsek (Kepolisian Sektor)</h5>
                    <p class="card-text">Kami bekerja sama dengan kepolisian republik indonesia terutama kepolisian sektor yang ada di kota Batam, nantinya laporan yang masuk akan dikelola oleh polsek di masing masing wilayah pelapor.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <img src="./images/Vector.png" alt="Kepolisian" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
};
