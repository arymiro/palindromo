function palindrome(str) {
    var stSinCaracteresEspeciales = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s+]/gi, '').toLowerCase();
    var stSinCaracteresEspecialesAlReves = stSinCaracteresEspeciales.split('').reverse().join('');
    return stSinCaracteresEspeciales == stSinCaracteresEspecialesAlReves;
}
  
  
function mostrarResultado(){
    var stCadena = document.getElementById('palabra').value;
    
    var boEsPalindrome = palindrome(stCadena);

    if (boEsPalindrome) {
        document.getElementById("resultado").textContent = "La cadena SI es palindrome.";
    }else{
        document.getElementById("resultado").textContent = "La cadena NO es palindrome.";
    }
}
  
  
