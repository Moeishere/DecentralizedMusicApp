import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">myTunes</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#artist">Artist Dashboard</a></li>
            <li><a href="#buyer">Buyer Dashboard</a></li>
            <li><a href="#purchase">Purchase Song</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <h2>Discover &amp; Support Independent Artists</h2>
        <p>
          Experience music like never before—directly from the artists without middlemen.
        </p>
        <a href="#songs" className="cta-button">Explore Songs</a>
      </div>
    </section>
  );
}

function SongCard({ image, title, artist }) {
  return (
    <div className="song-card">
      <img src={image} alt="Song Cover" />
      <div className="song-info">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
      <button className="purchase-btn">Purchase</button>
    </div>
  );
}

function SongList() {
  const songs = [
    { id: 1, image: 'https://via.placeholder.com/300x300', title: 'Song One', artist: 'Artist A' },
    { id: 2, image: 'https://via.placeholder.com/300x300', title: 'Song Two', artist: 'Artist B' },
    { id: 3, image: 'https://via.placeholder.com/300x300', title: 'Song Three', artist: 'Artist C' },
    { id: 4, image: 'https://via.placeholder.com/300x300', title: 'Song Four', artist: 'Artist D' },
  ];

  return (
    <section className="song-list" id="songs">
      <h3>Featured Songs</h3>
      <div className="song-grid">
        {songs.map(song => (
          <SongCard 
            key={song.id}
            image={song.image}
            title={song.title}
            artist={song.artist}
          />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 myTunes. All Rights Reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SongList />
      <Footer />
    </div>
  );
}

export default App;
