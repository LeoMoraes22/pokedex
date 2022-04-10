/*
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon abertto e mostar o cartão
correspondente ao que foi selecionado na listagem 

para isso vamos precisar trabalhar com dois elementos 
1 - listagem
2 - cartão pokémon

preciasmos criar duas variaveis no JS pra trabalhar com os elemnetos da tela 

vamos precisar trabalhar com evento de click peto pelo usuários de porkémons

- remover a classe aberto só do cartão que está aberto 
- ao clicar em um pokémon da listagem pegamos oo id desse pokémon pra saber qual cartão mostrar
- remover a classe ativa que marca o pokémon selecionado
- adiconar a classe ativo no item da lista adicionado
*/

//precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela 
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    //vamos precisar trabalhar com evento de click peto pelo usuários de porkémons
    pokemon.addEventListener('click', () =>{
        //remover a classe aberto só do cartão que está aberto 
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        //ao clicar em um pokémon da listagem pegamos oo id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adiconar a classe ativo no item da lista adicionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
