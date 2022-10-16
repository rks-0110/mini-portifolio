/*

objetivo: quando clicar na aba mostrar o conteúdo da aba, 
e esconder a outra aba

- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

- passo 2 - dar um jeito de identificar o clique no elemento da aba

- passo 3 - quando o usuário clicar, desmarcar a aba selecionada

- passo 4 - marcar a aba clicada como selecionado

- passo 5 - esconder o conteúdo anterior

- passo 6 - mostrar o conteúdo da aba selecionada

*/

//- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

//- passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        //guard closener = evita redundancia de codigo
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    //passo 3 - quando o usuário clicar, desmarcar a aba selecionada -> remover a classe de uma aba e adicionar na outra aba
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")//nao necessita . para o nome da classe pois ja e uma lista de classes

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
    //passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6 - mostrar o conteúdo da aba selecionada -> possivel colocar mais abas -> usando id no html
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`//gera string para passar ao proximo const
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")

    //teste
    //console.log(informacaoASerMostrada);
}