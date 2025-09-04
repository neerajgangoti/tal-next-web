export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <small>© {year} The ArtLogic — All rights reserved.</small>
          <small>Built with TheArtLogin</small>
        </div>
      </div>
    </footer>
  )
}
