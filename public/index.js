window.onload = () => {
  // Link Sobre
  const linkSobre = document.getElementById("link-sobre");
  const sobre = document.getElementById("sobre");

  linkSobre.onclick = () => {
    sobre.scrollIntoView(true);
  }

  // Link Formação
  const linkFormacao = document.getElementById("link-formacao");
  const formacao = document.getElementById("formacao");

  linkFormacao.onclick = () => {
    formacao.scrollIntoView(true)
  }
  
  // Link Portfólio
  const linkPortfolio = document.getElementById("link-portfolio");
  const portfolio = document.getElementById("portfolio");

  linkPortfolio.onclick = () => {
    portfolio.scrollIntoView(true)
  }

  // Link Contato
  const linkContato = document.getElementById("link-contato");
  const contato = document.getElementById("contato");

  linkContato.onclick = () => {
    contato.scrollIntoView(true)
  }
  
};

