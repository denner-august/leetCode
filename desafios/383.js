console.clear();
console.time();
function canConstruct(ransomNote, magazine) {
    let total = ransomNote.length;
    let formaPalavra = magazine;
    for (let index = 0; index < ransomNote.length; index++) {
        let regex = /[a-z]/;
        if (formaPalavra.includes(ransomNote[index])) {
            total--;
            formaPalavra = formaPalavra.replace(regex.exec(ransomNote[index]).input, '');
        }
        else
            return false;
    }
    return total === 0 ? true : false;
}
console.log(canConstruct("bg", "diaibgdadhcfcj")); // esperava true
// console.log(canConstruct("aab", "aab")); // espera true
// console.log(canConstruct("aab", "baa")); //esperava true
// console.log(canConstruct("a", "b")); //espera false
// console.log(canConstruct("aa", "ab")); // espera false
console.log(canConstruct("fihmjjei", "hjibagacbhadfaefdjaeaebgi")); // esperava false
console.timeEnd();
