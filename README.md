# Mario-Game

Este código é um jogo simples que usa JavaScript, HTML E CSS. O objetivo do jogo é saltar com o Mario para evitar colidir com um obstáculo.

## Recursos

    Personagem (Mario) com animação de pulo.
    Obstáculo (cano) que move para a esquerda.
    Fundo (nuvem) com animação de movimento para a esquerda.
    Música de fundo que toca ao carregar a página e é alterada quando o Mario colide com o cano.

## Como jogar

    Pressione qualquer tecla para fazer o Mario pular.
    O objetivo é saltar com o Mario para evitar colidir com o cano.
    Se o Mario colidir com o cano, a animação é interrompida e a música é alterada.

## Variáveis e Funções

    mario: Variável que armazena a referência ao elemento do Mario na página HTML.
    cano: Variável que armazena a referência ao elemento do cano na página HTML.
    nuvem: Variável que armazena a referência ao elemento da nuvem na página HTML.
    audionormal: Variável que armazena a referência ao elemento de áudio de fundo na página HTML.
    jump: Função que é chamada quando o evento "keydown" é disparado. Adiciona a classe "pulo" ao elemento do Mario, criando uma animação de pulo.
    loop: Intervalo que é executado a cada 10 milissegundos e verifica a posição do Mario em relação ao cano para determinar se o Mario colidiu com o cano. Se isso acontecer, a animação é interrompida e a música é alterada.
