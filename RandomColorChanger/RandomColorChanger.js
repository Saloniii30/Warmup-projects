const randomColor= function(){
    const hex='0123456789ABCDEF';
    let color= '#'
    for(let i=0;i<8;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
} 
let intrvalId;
const startChangingColor= function(){
    if(!intrvalId){
        intrvalId=setInterval(changebgColor,1000)
    }
    function changebgColor(){
        document.body.style.backgroundColor= randomColor();
    }
};
const stopChangingColor=function(){
    clearInterval(intrvalId);
    intrvalId=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);

