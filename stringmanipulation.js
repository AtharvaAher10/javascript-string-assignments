// Que 2) The word is exists in the given string or not //
const inpStr = "Hello i am KL Rahul";
const inpWord = "Rahul";

isExists = (string , word) =>{
    for(let i=0; i<=string.length - word.length;i++){
        let found = true;
        for(let j=0; j < word.length;j++){
            if(string[i + j] !== word[j]){
                found = false;
                break;
            }
        }

        if(found) {
            return true;
        }
    }
    return false;
}
console.log("'Answer no 2' the word Rahul exists in the string is " + isExists(inpStr,inpWord));


// Que 3) Count the occurance of the word in the given string //
occuranceCount = (str,word) => {
    let count = 0;
    let i = 0;
    while(i<=str.length - word.length){
        let match = true;

        for(let j=0; j< word.length; j++){
            if(str[i+j] !== word[j]){
                match = false;
                break;
            }
        }

        if(match){
            count ++;
            i = i + word.length;
        }else{
            i++
        }
    }
    return count;
}
let string = "he is a man and he is the prime and he is the one"
let wordCount = "he";
console.log("'Answer no 3' the occurance of the word 'he' in the given string is " + occuranceCount(string,wordCount));



// Que 5) Write a function getExt that extracts the file extension from a given string representing a file name.If no extension present return null. //
getExt = (filename) =>{
    let dotIdx = -1;
    for(let i=0; i< filename.length;i++){
        if(filename[i] === '.'){
            dotIdx = i;
        }
    }

    if(dotIdx === -1 || dotIdx === 0 || dotIdx === filename.length -1 ){
        return null;
    }

    let extension = '';
    for(let i=dotIdx+1;i<filename.length;i++){
        extension = extension + filename[i];
    }

    return extension;
}

console.log("'Answer no 5' the extension of the given file name is " + getExt("name.txt"));
console.log("'Answer no 5' the extension of the given file name is " + getExt("javascript"));


// Que 6) Write a js function removeWhitespace that removes all whitespaces from a given string. //
removeWhitespaces = (str) => {
    let result = '';
    for(let i=0;i<str.length;i++){
        if(str[i] !== ' '){
            result = result + str[i];
        }
    }
    return result;
}
const strWithspace = "  'Hello World  Of  Javascript'";
const strWithoutspace = removeWhitespaces(strWithspace);
console.log("'Answer no 6' string when removing the whitespaces is " + strWithoutspace);


// Que 7) write a function to reverse the order of the given string //
revStr = (str) => {
    rev1 = '';
    for(let i=str.length-1;i>=0 ;i--){
        rev1 = rev1 + str[i];
    }
    return rev1;
}

const originalStr = "'Atharva'";
const reversed = revStr(originalStr);
console.log("'Answer no 7' the reversed string is " + reversed);


// Que 8) Write a js function to calculate the vowels in the given string //
countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count =0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i] === vowels[j]){
                count ++;
                break;
            }
        }
    }

    return count;
}

const result = countVowels("arithmetic operation");
console.log("'Answer no 8' the vowels in the given string is " + result);


// Write a function isPalindrome that checks if a given string is a palindrome. //
let str = "sTUIUTs";
isPalindrome = (str1) => {
    let left = 0;
    let right = str1.length-1;
        while(left < right){
        if(str1[left] !== str1[right]){
            return false;
        }
        left ++;
        right--;
    }
    return true;
}
console.log(isPalindrome(str));


// Que 12) Write a function truncateString that truncates a given string to a specified length and append //
truncateStr = (str,length) => {
    var truncated = '';
    for(var i=0 ; i<length; i++){
        truncated = truncated + str[i];
    }
    truncated += '...';
    return truncated;
}
var strResult = truncateStr("this is very long string" , 6);
console.log("'Answer no 12' the truncated string with length 6 is : " + strResult);



