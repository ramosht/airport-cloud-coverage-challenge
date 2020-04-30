# airport-cloud-coverage-challenge
**Premissas:**

- O Frontend deve ser um SPA escrito em React com React hooks;
- Backend deve ser escrito nodejs utilizando a suite krakenjs;
- Todos os cálculos devem ser efetuados em um endpoint no backend (API);
- O frontend deve enviar para a api os dados iniciais, sendo:
    - Quantidade mínima de aeroportos: 3;
    - Quantidade mínima de nuvens: 4 nuvens;
    - Tamanho do terreno tendo no mínimo uma área de 10 x 10 linhas.
- Como resultado ele [o front] deve receber os dados para plotagem de um gráfico ou grid com o resultado do calculo;
- O resultado deve sempre iniciar com o numero de nuvens e aeroportos em posições aleatórias, lembrando que um aeroporto não pode iniciar com uma nuvem sobre ele.

## O Desafio: 
Um vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se alastra impedindo a circulação aérea. O governo está muito preocupado e deseja saber quando uma nuvem de cinzas irá atingir todos os aeroportos do país.Está disponível um mapa detalhando a situação atual. O mapa é retangular, dividido em pequenos quadrados. Neste mapa existem três tipos de quadrados: nuvem (indicando que esta região do mapa já está coberto por nuvens), aeroportos (indicando a localização de um aeroporto) e todas as outras (indicando locais onde a nuvem ainda não chegou).A cada dia, a nuvem expande-se um quadrado na horizontal e um quadrado na vertical. Ou seja, ao fim de cada dia, todos os quadrados adjacentes (vertical ou horizontalmente) a uma nuvem, também passam a conter nuvens.

**Por Exemplo:**
```
 . . * . . . * *     . * * * . * * *    * * * * * * * *
 . * * . . . . .     * * * * . . * *    * * * * * * * *
 * * * . A . . A     * * * * A . . A    * * * * * . * *
 . * . . . . . . ->  * * * . . . . . -> * * * * . . . .
 . * . . . . A .     * * * . . . A .    * * * * . . A .
 . . . A . . . .     . * . A . . . .    * * * A . . . .
 . . . . . . . .     . . . . . . . .    . * . . . . . .
     Dia 1               Dia 2              Dia 3
```
### Para preparar os planos de contingência, o governo necessita saber:
- Quantos dias demorará para ao menos um aeroporto ficar coberto pelas nuvens
- Daqui quantos dias todos os aeroportos estarão cobertos pelas nuvens.Dado um quadriculado mínimo de 10 linhas e 10 colunas, além da indicação inicial das nuvens e dos aeroportos, desenvolva uma programa que informe o número de dias até um primeiro aeroporto ficar debaixo da nuvem de cinzas e o número de dias até que todos os aeroportos ficarem cobertos pelas cinzas.Podendo subir o resultado do teste no git pessoal do candidato me enviando o link do projeto para analise.

# Utilizando a aplicação
Inicializar cada parte do projeto, basta ir na pasta em questão e executar os comandos descritos abaixo.
## Frontend
```
yarn install
yarn start
```
## Backend
```
yarn install
yarn start
```
