let word = prompt("digite uma palavra")
let inversedword =  ""
for (let i = word.length - 1; i >= 0; i--) {
  inversedword += word[i]
  
}

if (word === inversedword) {
  alert('a palavra ${word} é um polindromo')
  
} else{
  alert('a palavra ${word} não é um polindromo pois ${inversedword} é a inversa de $ {word}')
    
}
