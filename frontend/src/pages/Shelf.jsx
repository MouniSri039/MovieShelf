function Shelf() {
  return (
    <main className="shelf-page">
      <section className="shelf-header">
        <div>
          <p className="small-heading">MY COLLECTION</p>

          <h1>My Shelf</h1>

          <p>Your personal collection of movies.</p>
        </div>

        <button className="primary-button">+ Add Movie</button>
      </section>

      <section className="empty-shelf">
        <div className="empty-icon">🎬</div>

        <h2>Your shelf is empty</h2>

        <p>Start adding movies you'd like to watch.</p>

        <button className="primary-button">Add Your First Movie</button>
      </section>
    </main>
  );
}

export default Shelf;
