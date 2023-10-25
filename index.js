window.onload = () => {
  const navbarHeight = document.getElementById("top-nav").offsetHeight + 40;

  // Rolar até uma seção com ajuste para a altura do navbar
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // Link Sobre
  const linkSobre = document.getElementById("link-sobre");
  linkSobre.onclick = () => {
    scrollToSection("sobre");
  };

  // Link Formação
  const linkFormacao = document.getElementById("link-formacao");
  linkFormacao.onclick = () => {
    scrollToSection("formacao");
  };

  // Link Portfólio
  const linkPortfolio = document.getElementById("link-portfolio");
  linkPortfolio.onclick = () => {
    scrollToSection("portfolio");
  };

  // Link Contato
  const linkContato = document.getElementById("link-contato");
  linkContato.onclick = () => {
    scrollToSection("contato");
  };
  
};

