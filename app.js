const binary= document.getElementById('binary');
const decimal=document.querySelector('.result');
const btn=document.querySelector('.btn');


function binToDec(){
    let number=binary.value;
    const numArr=number.split('').reverse();
    let decNum=0;

    for(let i=0; i<numArr.length; i++){
        if(numArr[i]>=0 && numArr[i]<=1){
        decNum+=Number(numArr[i])*Math.pow(2, i);
    }else{
    binary.value="";  
    binary.setAttribute('placeholder', 'Enter a binary number');
    decimal.textContent='Invalid Number';
    return;
}};
    decimal.textContent=`Decimal Number : ${decNum}`;

    binary.addEventListener('keyup', ()=>{
        binary.value="";
        decimal.textContent='Decimal Number : 0';
    })
};
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    binToDec();
});