// document.body.style.backgroundColor = 'red';
// document.querySelector('.again').style.display = 'none';


// const  btn = document.querySelector('.again')
// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'green';
//     btn.textContent = 'try Again';
//     document.querySelector('.message').textContent = 'congrats you have won😜'

//  })

// document.querySelector('.number').textContent = Math.trunc(Math.random()*30) + 20;

// // const  btn2 = document.querySelector('.check')
// // let randomNumber = Math.trunc(Math.random()*30) +1;
// // btn2.addEventListener('click',function(){
// //     if(btn2 === randomNumber){
// //         document.body.style.backgroundColor = 'green';
// //     }
// // })



let score = 10;
// let higherScore = 0;

// const displayMessage = function(message) {
//     document.querySelector('.message').textContent = message;
// };

document.querySelector('.again').style.display = 'none';
let secretNumber = Math.trunc(Math.random() *30) + 1;

document.querySelector('.check').addEventListener('click',function() {

    const guess = Number(document.querySelector('.guess').value);

    if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct! you quessed it';
        document.querySelector('.body').style.backgroundColor = '#60b347';
        document.querySelector('.again').style.display = 'block';
        document.querySelector('.number').textContent = secretNumber;
    }else{
        document.querySelector('.message').textContent = 'oops! try again';
        score--;
        document.querySelector('.score').textContent = score;
    }
});









// const parisWeight = 78;
// const parisHeight = 1.69;
// const parisBMI = parisWeight/parisHeight**2;
// console.log(parisBMI);


// const oreziWeight = 92;
// const oreziHeight = 1.95;
// const oreziBMI = oreziWeight/oreziHeight**2;
// console.log(oreziBMI);
// console.log(`paris bmi (${parisBMI}) is higher than orezi bmi (${oreziBMI})`);

// const bmiComparisim = parisBMI>oreziBMI;
// console.log(bmiComparisim);

// const parisWeight2 = 95;
// const parisHeight2 = 1.88;
// const parisBMI2 = parisWeight2/parisHeight2**2;
// console.log(parisBMI2);


// const oreziWeight2 = 92;
// const  oreziHeight2 = 1.95;
// const oreziBMI2 = oreziWeight2/oreziHeight2**2;
// console.log(oreziBMI2);

// const bmiComparisim2 = parisBMI2>oreziBMI2;
// console.log(bmiComparisim2);




// let height = Number(prompt('input your height'));
// let weight = Number(prompt('type your weight'));

// const totalBMI = weight/height**2;
// alert(`your BMI is = ${totalBMI}`);



// // //TERNARY (CONDITIONAL) OPERATOR
// // weight>height?console.log('your weight galant o'):console.log('you too tall');




// const classCheck = document.querySelector('.score').textContent;
// console.log(typeof(classCheck));




//  const dolphinData1 = [96,108,89];
//  const koalasData1 = [88,91,110];

//  const dolphinAdd = dolphinData1[0]+dolphinData1[1] + dolphinData1[2];
//  const dolphinAverage = dolphinAdd / dolphinData1.length;
//  console.log(dolphinAverage);

//  const koalasAdd = koalasData1[0]+ koalasData1[1] + koalasData1[2];
//  const koalaAverage = koalasAdd / koalasData1.length;
//  console.log(koalaAverage);

// // const generalAverage = [dolphinData1 + koalasData1];
// //  const teamAverage = dolphinData1.length + koalasData1.length / generalAverage.length;  1
// //  console.log(teamAverage);  1
// //  dolphinAverage > koalaAverage?console.log('dolphin is the winner'):console.log('koala tea  1m won');
//   1
//   1
// //////// question 3.  1
//   1
//   1
//  const dolphinData2 = [97,112,101];  1
//  const koalasData2 = [109,95,123];  1

//  const dolphinAdd2 = dolphinData2[0]+dolphinData2[1] + dolphinData2[2];
//  const dolphinAverage1 = dolphinAdd2 / dolphinData2.length;
//  console.log(dolphinAverage1);

//  const koalasAdd2 = koalasData2[0]+ koalasData2[1] + koalasData2[2];
//  const koalaAverage1 = koalasAdd2 / koalasData2.length;
//  console.log(koalaAverage1);





// const billValue1 = 275;
// const billValue2 = 40;
// const billValue3 = 430;

// const tip1 = 15;
// const tip2 = 20;

// const tipValue1 = (billValue1*tip1)/100;
// console.log(tipValue1);
// const totalValue1 = billValue1 + tipValue1;
// billValue1 >= 50 && billValue1 <= 300 ? console.log(`the bill was ${billValue1}, the tip was ${tipValue1}, and the total value was ${totalValue1}`) : console.log('wrong');

// const tipValue2 = (billValue2*tip2)/100;
// console.log(tipValue2);
// const totalValue2 = billValue2 + tipValue2;
// billValue2 < 50 ? console.log(`the bill was ${billValue2}, the tip was ${tipValue2}, and the total value was ${totalValue2}`):console.log('wrong');


// const tipValue3 = (billValue3*tip2)/100;
// console.log(tipValue3);
// const totalValue3 = billValue3 + tipValue3;
// billValue3 > 300? console.log(`the bill was ${billValue3}, the tip was ${tipValue3}and the total value was ${totalValue3}`):console.log('wrong');



// const calcAverage = (a,b,c) => (a+b+c)/3;

// const dolphinAvgScore = calcAverage(44,23,71);
// const koalasAvgScore = calcAverage(65,54,49);
// console.log(dolphinAvgScore, koalasAvgScore);


// const dolphinsAvgScore = 

///////////////////    USING SPREAD OPERATOR    //////////////////////
//  const frontEnd = ['lanre','eggy','Obehi'];
//  const backend = ['sam','mike','david','eniola','mariam'];

//  const techStudioStudents = [...frontEnd, ...backend];
//  console.log(techStudioStudents);


//  M
 