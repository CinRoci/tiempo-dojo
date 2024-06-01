function removeButton(){
    let popup=document.querySelector(".bodyContainerMessage");
    popup.style.display="none";
}

function convert(element){
    let elementValue=element.value;
    let elementMax= document.getElementById("max");
    let elementMin= document.getElementById("min");
    if(elementValue==="fº"){
        for (let i= 0; i < elementMax.length; i++){
            let valorMax= elementMax[i].innerHTML;
            let fahrenheitMax= (valorMax*9)/5+32;
            elementMax[i].innerHTML= Math.round(fahrenheitMax);
            let valorMin= elementMin[i].innerHTML;
            let fahrenheitMin= (valorMin*9)/5+32;
            elementMin[i].innerHTML=Math.round(fahrenheitMin);
        }
    }
    if(elementValue==="cº"){
        for (let i= 0; i < elementMax.length; i++){
            let valorMax= elementMax[i].innerHTML;
            let fahrenheitMax= (valorMax-32)*(5/9);
            elementMax[i].innerHTML= Math.round(fahrenheitMax);
            let valorMin= elementMin[i].innerHTML;
            let fahrenheitMin= (valorMin-32)*(5/9);
            elementMin[i].innerHTML=Math.round(fahrenheitMin);   
    }
}
}