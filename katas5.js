// implemente aqui as funções de teste
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testeReverseString2() {
    let result = reverseString("lotus Academy");
    let expected = "ymedacA sutol";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


 const reverseString = (katas)=> {
    let reverte =katas.split("").reverse().join("");
        return reverte;

 }
 
 
 /**/ 


 function testReverseSentence1(){
    let result = reverseSentence("lotus Academy");
    let expected = "Academy lotus";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 function testReverseSentence2(){
    let result = reverseSentence("calvin Acad");
    let expected = "Acad calvin";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 const reverseSentence = (katas)=> {
    let reverteTexto =katas.split(" ").reverse().join(" ");
         return reverteTexto;   
    }


/**/

function testMinimumValue1(){
    let result = minimumValue([1,2,4,3,5,6,7,8,9,0]);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
function testMinimumValue2(){
    let result = minimumValue([-1,2,4,3,5,6,7,8,9,0]);
    let expected = -1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
const minimumValue = (katas)=>{

    return Math.min(...katas);
}


/**/


function testMaximumValue1(){
    let result = maximumValue([-1,2,4,3,5,6,7,8,9,0]);
    let expected = 9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
function testMaximumValue2(){
    let result = maximumValue([11,2,4,3,5,6,7,8,9,0]);
    let expected = 11;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const maximumValue = (katas)=>{
    return Math.max(...katas);
}


/**/

function testCalculateRemainder1(){
    let result = calculateRemainder(8,3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2(){
    let result = calculateRemainder(19,3);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const calculateRemainder = (dividendo, divisor)=> {
    valor = dividendo%divisor;
    return valor;
}


/**/
 function testDistinctValues1(){
     let result = distinctValues("1 1 1 2 2 3 4 5 6 6 7 8");
     let expected ="1 2 3 4 5 6 7 8";
     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);

 }
 function testDistinctValues2(){
     let result = distinctValues("11 11 11 12 12 1 1 2 2 3 3 4 4 5 5 5 6 7 8 9");
     let expected ="11 12 1 2 3 4 5 6 7 8 9";
     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
const distinctValues = (arr)=>{
let valorArr=arr.split(" ");
let valor2=[];
let contador2=0;
for(let cont=0; cont<arr.length; cont++) {
if(valor2.indexOf(valorArr[cont])===-1){
 valor2[contador2]=valorArr[cont];
    contador2++;
}
}
valor2=valor2.join(" ").replace(/\s{2,}/g, ' ').trim();
return valor2;
}


/* */
function testCountValues1(){
    let result = countValues("1 1 1 2 3 3 4 4 4 4 5 5 6 7 8 8 8 8 9 9 9 9 10 10 10 ");
    let expected = "1: 3 2: 1 3: 2 4: 4 5: 2 6: 1 7: 1 8: 4 9: 4 10: 3";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
 function testCountValues2(){
     let result = countValues("1 1 1 1 2 3 3 4 4 4 4 5 5 6  7 8 8 8 8");
     let expected = '1: 4 2: 1 3: 2 4: 4 5: 2 6: 1 7: 1 8: 4';
     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

const countValues = (arr)=>{
    let total =arr.split(' ');
    let valorArr=[];
    let contador2=0;
    let respostaContador =[];
    let respostaContador2 =''
    for(let cont=0; cont<total.length; cont++) {
    if(valorArr.indexOf(total[cont])===-1){
        valorArr[contador2]=total[cont];
        contador2++;
}
}

  for(let contador3=0; contador3<valorArr.length;contador3++) {
    if(valorArr[contador3]!==" "&&valorArr[contador3]!==""){    
    respostaContador[contador3] = total.filter(x => x === valorArr[contador3]).length;
    respostaContador2+= valorArr[contador3]+": "+respostaContador[contador3]+" ";
    }
}
respostaContador2= respostaContador2.replace(/\s{2,}/g, ' ').trim()
return respostaContador2;
}



/* */
function testEvaluateExpression() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 11, b: 7, c: 3, d: 14});
    let expected = 7
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

function testEvaluateExpression2() {
    let result = evaluateExpression("a - b - c + d", {a: 1, b: 7, c: 3, d: 14});
    let expected = 5
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
const evaluateExpression = (expressao, objets) => {
    let a = objets.a;
    let b = objets.b;
    let c = objets.c;
    let d = objets.d;
    let calcula =0;

        if(expressao[0]==="a"){
            calcula =a;
        }else if(expressao[0]==="b"){
    calcula =b;
        }else if(expressao[0]==="c"){
    calcula =c;
        }else if(expressao[0]==="d"){
        }else if(expressao[0]==="d"){
    calcula =d;
        }
    for(let contador =1;contador<expressao.length;contador++){
        if(expressao[contador]==="+"){
            if(expressao[contador+2]==="a"){
                calcula+=a;
            }else if(expressao[contador+2]==="b"){
                calcula+=b;
            }else if(expressao[contador+2]==="c"){
                calcula+=c;
            }else if(expressao[contador+2]==="d"){
                calcula+=d;
            }
        }else if(expressao[contador]==="-"){
            if(expressao[contador+2]==="a"){
                 calcula-=a;
            }else if(expressao[contador+2]==="b"){
                calcula-=b;
            }else if(expressao[contador+2]==="c"){
                calcula-=c;
            }else if(expressao[contador+2]==="d"){
                calcula-=d;
            }
        }else if(expressao[contador]==="*"){
            if(expressao[contador+2]==="a"){
                calcula*=a;
            }else if(expressao[contador+2]==="b"){
                calcula*=b;
            }else if(expressao[contador+2]==="c"){
                calcula*=c;
            }else if(expressao[contador+2]==="d"){
                calcula*=d;
             }

        }else if(expressao[contador]==="/"){
           if(expressao[contador+2]==="a"){
            calcula/=a;
            }else if(expressao[contador+2]==="b"){
            calcula/=b;
            }else if(expressao[contador+2]==="c"){
            calcula/=c;
            }else if(expressao[contador+2]==="d"){
            calcula/=d;
            } 
        }
    }
    return calcula;
}

 testeReverseString1();
 testeReverseString2();
 testReverseSentence1();
 testReverseSentence2();
 testMinimumValue1();
 testMinimumValue2();
 testMaximumValue1();
 testMaximumValue2();
 testCalculateRemainder1();
 testCalculateRemainder2();
 testDistinctValues1();
 testDistinctValues2();
 testCountValues1();
 testCountValues2();
 testEvaluateExpression();
 testEvaluateExpression1();
 testEvaluateExpression2();