function habilitarRecursos() {
  
  function aparecerLogin() {
      const Login = document.getElementById("menuDesaparecido");
      Login.classList.toggle("menuProfileAparecendo");
    }
  
    const btnAMenuP = document.getElementById("btnApareceProfile");
    btnAMenuP.addEventListener("click", () => aparecerLogin());
  
    const btnFMenuP = document.getElementById("btnFecharMenuProfile");
    btnFMenuP.addEventListener("click", () => aparecerLogin());
  }
  habilitarRecursos();