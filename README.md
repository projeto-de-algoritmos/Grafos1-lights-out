# Lights Out Game

Este jogo *desafiador* e super *empolgante* ver trazer um desafio ao seus jogadores: **apagar todas as luzes do tabuleiro**. Tendo como adversário um computador que sabe de "cabeça" a resolução, o usuário deve mostrar mais agilidade para poder vencer nesse jogo.

![login](https://i.imgur.com/OQ1VN2Z.png)
![board](gameBoard.png)

## Implementação

O adversário implementado usa um algoritmo de **BFS** que percorre um grafo que é gerado a cada tentativa de jogada do algoritmo, de forma a determinar se existe ou não solução, e caso haja, qual o menor caminho a ser percorrido para tal finalidade. Por meio do uso de *hashs*, é guardado o estado do tabuleiro em sua representação binária e os movimentos que foram necessários para chegar até ele.

## Developers

<table border="0">
    <tr>
        <td> <img src="https://avatars3.githubusercontent.com/u/29265857?s=460&v=4"> </td>
        <td> <img src="https://avatars3.githubusercontent.com/u/42387946?s=460&v=4"> </td>
    </tr>
    <tr>
        <td align="center"> <a href="https://github.com/youssef-md"> Youssef Muhamad </a> <br> 17/0024334 </td>
        <td align="center"> <a href="https://github.com/rogerioo"> Rogério Júnior </a> <br> 17/0021751 </td>
    </tr>
</table>

# Como Usar

1. Clone o repositório
2. Dentro do diretório execute ```npm install``` para instalar as dependências
3. Execute ```npm start``` para utilizar o projeto localmente em localhost:3000 por padrão

<hr/>
<p align="center"><b>Lights Out</b></p>
<p align="center">Projeto e Análise de Algoritmos - 2º/2019<br /><br />
<a href="https://fga.unb.br" target="_blank"><img width="230"src="https://4.bp.blogspot.com/-0aa6fAFnSnA/VzICtBQgciI/AAAAAAAARn4/SxVsQPFNeE0fxkCPVgMWbhd5qIEAYCMbwCLcB/s1600/unb-gama.png"></a>
</p>