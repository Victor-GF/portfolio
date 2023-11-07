window.onload = () => {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;

  // Rolar até uma seção da página com ajuste para a altura do header
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // Link Sobre
  const linkSobre = document.getElementById("link-sobre");
  linkSobre.onclick = () => {
    window.scrollTo(0, 0);
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
  
  // Interação do Header ao descer a tela
  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight * 2) {
      header.classList.add("on-top");
    } else {
      header.classList.remove("on-top");
    }
  })
};

