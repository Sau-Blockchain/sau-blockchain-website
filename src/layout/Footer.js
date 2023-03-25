import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-3">
    
      <p>İnstagram</p>
      <p>Twitter</p>
      <p>linkedIn</p>
      <p>İletişim: email@example.com<br />
      </p>
        <p>&copy; 2023 Tüm Hakları Saklıdır</p>
      </Container>
    </footer>
  );
}

export default Footer;
