import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección izquierda: Redes sociales */}
        <div className="footer-left">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook" aria-hidden="true"></i>
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram" aria-hidden="true"></i>
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i>
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
            GitHub
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-youtube" aria-hidden="true"></i>
            YouTube
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter" aria-hidden="true"></i>
            Twitter
          </a>
          
        </div>
        <span className="separator"> |</span>
        <br></br>
        <div className="footer-center">
          <a
            href="https://patricia-admin.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patricia Admin
          </a>
          
          <br></br>
          <p>
            &copy; {new Date().getFullYear()}. Página creada por David De La Puente.
          </p>
          <a href="https://">Terminos y Condiciones</a>
          
        </div>
        <span className="separator"> |</span>
        <div className="footer-right">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="200"
            height="150"
            allowFullScreen
            title="Ubicación de la oficina de Patricia"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
