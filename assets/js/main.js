// para usar com o node, instalar node fetch
// VARIÁVEIS DOM
const cepInput = document.querySelector('#CEP');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const ufInput = document.querySelector('#UF');



// FUNÇÕES
function buscaCep() {
    if ((cepInput.value).length == 8){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then((resposta) => resposta.json())
        //.then(dados => console.log(dados));
        .then(dados => {
            ruaInput.value = dados.logradouro;
            bairroInput.value = dados.bairro;
            ufInput.value = dados.uf;
            cepInput.value = dados.cep;
        });
    } else {
        
    }
}

cepInput.addEventListener('input', buscaCep)