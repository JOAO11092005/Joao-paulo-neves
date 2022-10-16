const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        
        console.log(aba.classList.contains
            ("selecionado"));
       if(aba.classList.contains("selecionado")){
        return;
       }
      
       const abaSelecionada = document.querySelector(".aba.selecionado");
       abaSelecionada.classList.remove("selecionado");

       aba.classList.add("selecionado");
       
       const informacaoSelecionada = document.querySelector(".informacao.Selecionado");
       informacaoSelecionada.classList.remove("selecionado");
       
       const idDoElementoDeInformacoesDaAba = 
       `informacao-${aba.id}` 
       const informacaoASermostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
       informacaoASermostrada.classList.add("selecionado");
    })
})