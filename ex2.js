//Sghayer Omayma
function remplacer(t){
    var indexesOfZeros= getAllIndexesOfZeros(t);
    var diffrences = makeDiffrences(indexesOfZeros);
    diffrences.pop();
    diffrences.push(t.length-indexesOfZeros[indexesOfZeros.length-1]-1);
    var maxdiff=Math.max.apply(null,diffrences);
    var indexOfMax=diffrences.reverse().indexOf(maxdiff); //finds the last index
    indexOfMax=diffrences.length - indexOfMax-1 ;

    
    return "Le 0 à elliminer se trouve à l'indice : " + indexesOfZeros[indexOfMax - 1];
}
function getAllIndexesOfZeros(t){
    return t.reduce((a,e,i)=>{
        if(e===0) a.push(i);
        return a;
    },[]);
    
}
 
function makeDiffrences(t){
    return t.reduce((a,e,i)=>{
        a.push(t[i+1]- e - 1);
        return a;
    },[t[0]]);
}

function getArrayFromConsole(){
    var s = prompt("enter your array :");
    s=s.substring(1,s.length-1);
    return s.split(',').reduce((a,e)=>{
        a.push(parseInt(e));
        return a;
    },[]);
    
}

console.log(remplacer(getArrayFromConsole()));
