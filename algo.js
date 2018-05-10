var toGoatLatin = function(S) {
    var answer = "";
    var array = S.split(" ");
    var counter = "a";
    for(word in array){
        
         if(array[word][0] == "A" || array[word][0] == "a" || array[word][0] == "E" || array[word][0] == "e" ||array[word][0] == "I" ||                     array[word][0] == "i" || array[word][0] == "O" || array[word][0] == "o" || array[word][0] == "U" || array[word][0] == "u"){
             
             array[word] = array[word]+"ma" + counter;
             
         }
        else{
            var replacer = array[word][0];
            array[word] = array[word].slice(1) +replacer+"ma"+counter;
        }
       
        
        counter = counter+"a";
    }
  
    for(x in array){
        if(x ==0){
            answer = array[x];
        }
        else{
             answer = answer + " " + array[x];
        }
       
    }
    return(answer);
};