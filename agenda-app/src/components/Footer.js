import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Desenvolvido por <a style={linkStyle} href='https://github.com/isaacnwt' target="_blank" rel="noopener noreferrer">isaacnwt</a>. Todos os direitos reservados.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '1em 0',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};

const linkStyle = {
  color: 'grey',
  textDecoration: 'none',
};

export default Footer;
