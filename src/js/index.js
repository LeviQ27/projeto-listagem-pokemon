/*

    O que precisamos fazer? - quando clicamos no botão de troca de tema temos que alterar a cor do tema da página para as cores tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
        - passo 1 - pegar no JS o elemento HTML correspodente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema para lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem para o sol
        - passo 6 - remover a clase do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema para sol
        - passo 8 - trocar a imagem do botão de alterar tema para sol
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua

// passo 1 - pegar no JS o elemento HTML correspodente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem para o sol

    // passo 6 - remover a clase do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // Além disso, temos uma função chamada toggle que pode substituir a funcionalidade de remove e add
    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo)
    {
        // passo 7 - trocar a imagem do botão de alterar tema para sol
        // body.classList.remove("modo-escuro");

        // passo 8 - trocar a imagem do botão de alterar tema para sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else
    {
        // passo 4 - adicionar a classe modo-escuro no body
        // body.classList.add("modo-escuro");
        
        // passo 5 - trocar a imagem do botão de alterar tema para lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
