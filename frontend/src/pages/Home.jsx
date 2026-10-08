import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="small-heading">WELCOME TO MOVIESHELF</p>

          <h1>
            Your movies.
            <br />
            Your shelf.
          </h1>

          <p className="hero-text">
            Discover movies you love, keep track of what you want to watch, and
            build your own personal movie collection.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-button">
              Create Your Shelf
            </Link>

            <Link to="/login" className="secondary-button">
              Sign In
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="movie-card-top">
            <span>YOUR SHELF</span>
            <span>♡</span>
          </div>

          <div className="movie-placeholder">🎬</div>

          <h3>Your next favorite movie</h3>

          <p>Save it. Watch it. Remember it.</p>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <p className="small-heading">MAKE IT YOURS</p>

          <h2>
            Everything you need
            <br />
            for your movie collection.
          </h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span>🎬</span>
            <h3>Build Your Shelf</h3>
            <p>Save movies you want to watch and create your own collection.</p>
          </div>

          <div className="feature-card">
            <span>⭐</span>
            <h3>Rate & Review</h3>
            <p>Keep track of your favorite movies and share your thoughts.</p>
          </div>

          <div className="feature-card">
            <span>🍿</span>
            <h3>Discover</h3>
            <p>
              Explore movies and find something perfect for your next movie
              night.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
