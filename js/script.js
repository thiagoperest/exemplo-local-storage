// Função para salvar os valores preenchidos nos campos do input para o Local Storage do navegador.
function salvarLocalStorage() {

  // Exemplo armazenando valores individuais - Início.

    // Armazena em uma variável o valor contido no input do nome.
    let nomeValor = document.querySelector("#nome").value;

    // Armazena em uma variável o valor contido no input do sobrenome.
    let sobrenomeValor = document.querySelector("#sobrenome").value;

    // Salva em Local Storage o valor armazenado na variável "nomeValor" e a chave se chama "nome-exemplo", importante adotar o padrão de " - " para separar as demais palavras.
    localStorage.setItem("nome-exemplo", nomeValor);

    // Salva em Local Storage o valor armazenado na variável "sobrenomeValor" e a chave se chama "sobrenome-exemplo".
    localStorage.setItem("sobrenome-exemplo", sobrenomeValor);

  // Exemplo armazenando valores individuais - Fim.


  ////////////////////////////////////////////////////////////////////////////////


  // Exemplo armazenando diversos valores em apenas uma chave no Local Storage - Início.

    let dadosAdicionaisValor = {
      idade: document.querySelector("#idade").value,
      hobby: document.querySelector("#hobby").value
    }

    // Converter o objeto armazenado na variavel "dadosAdicionaisValor" em string usando o "JSON.stringify" para salvar no Local Storage.
    localStorage.setItem("dados-adicionais-exemplo", JSON.stringify(dadosAdicionaisValor))



  // Exemplo armazenando diversos valores em apenas uma chave no Local Storage - Fim.


  ////////////////////////////////////////////////////////////////////////////////

  // Faz o reload da página.
  location.reload()

}





// Função para carregar os valores preenchidos nos campos do input para o Local Storage do navegador.
function carregarLocalStorage() {

    // Exemplo carregando valores individuais do Local Storage - Início

        // Variável que acessa o valor armazenado na chave "nome-exemplo" onde está o nome salvo.
        let nomeLocalStorage = localStorage.getItem("nome-exemplo")

        // Neste momento estamos preenchendo o campo com ID "nome" que é o campo do input nome com o valor que está no Local Storage.
        document.querySelector("#nome").value = nomeLocalStorage


        let sobrenomeLocalStorage = localStorage.getItem("sobrenome-exemplo")
        document.querySelector("#sobrenome").value = sobrenomeLocalStorage


    // Exemplo carregando valores individuais do Local Storage - Fim


    ////////////////////////////////////////////////////////////////////////////////


    // Exemplo carregando diversos valores em apenas uma chave do Local Storage - Início.


        // Receber o armazenado da chave em formato string
        let dadosAdicionaisString = localStorage.getItem("dados-adicionais-exemplo");

        // Transformar o dados armazenado da variável "dadosAdicionaisString" em objeto para poder acessar individualmente os seus valores.
        let dadosAdicionaisObj = JSON.parse(dadosAdicionaisString);


        // Neste momento estamos preenchendo o campo com ID "idade" que é o campo do input idade com o valor que está no Local Storage do objeto "dados-adicionais-exemplo".
        document.querySelector("#idade").value = dadosAdicionaisObj.idade

        document.querySelector("#hobby").value = dadosAdicionaisObj.hobby

}