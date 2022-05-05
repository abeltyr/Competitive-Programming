function sortSentence(s: string): string {
    let sentenceArray = s.split(" ");
    let orderSentenceArray =[];
    
    for(let data in sentenceArray){
        let newData = sentenceArray[data].split("");
        let order: number = parseInt(newData[newData.length-1]) - 1;
        let word: string = sentenceArray[data].slice(0, newData.length-1);
        orderSentenceArray[order]=word
    }
    
    let finalSentence = "";
    
    for(let i: number =0 ; i < orderSentenceArray.length; i++){
        let space = " ";
        if(i > (orderSentenceArray.length-1) || finalSentence.length === 0) space = "";
        finalSentence = finalSentence +  space + orderSentenceArray[i];
    }
    return finalSentence;
};