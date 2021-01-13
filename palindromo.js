const texto = 'arara';
const explicacao = ` Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que tenha a \n propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita.`

/* 
   O método split() divide uma String em uma lista ordenada de substrings, 
   coloca essas substrings em um array e retorna o array. A divisão é feita 
   procurando um padrão, onde o padrão é fornecido como o primeiro 
   parâmetro na chamada do método. 
   
   O método reverse() inverte os itens de um array. O primeiro elemento do 
   array se torna o último e o último torna-se o primeiro.

   O método join() junta todos os elementos de um array (ou um array-like object) 
   em uma string e retorna esta string.

*/

const reverso = texto.split('').reverse().join(''); 

console.log( `${explicacao} \n`);

if(texto === reverso) {
   console.log(`A palavra ${texto} é um palíndromo!`);
} else {
   console.log(`A palavra ${texto} não é um palíndromo!`);
}
