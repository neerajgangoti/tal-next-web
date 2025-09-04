import Image from 'next/image';

export default function Hero(){
  // Use a remote dummy video for the banner. Replace with /hero.mp4 if you add a local file later.
  const videoSrc = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm";
  // Poster uses our logo as a placeholder
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-media">
        <video
          key={videoSrc}
          className="media"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="/logo.png"
        >
          <source src={videoSrc} type="video/webm" />
          {/* Fallback to mp4 sample */}
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>

        <span className="orb o1" aria-hidden />
        <span className="orb o2" aria-hidden />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Design. Build. Ship.</h1>
            <p className="hero-sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
            <div className="hero-cta">
              <a className="btn" href="/services">Explore Services</a>
              <a className="btn secondary" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
