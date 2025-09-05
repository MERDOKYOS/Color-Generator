// var css =document.querySelector("h1");
// var color1= document.querySelector(".color1");
// var color2= document.querySelector(".color2");
// var body= document.getElementById("gradient");

// color1.addEventListener("input", function(){
//   body.style.background="linear-gradient (to right, "+ color1.value +","+ color2.value +")";
// })

// color2.addEventListener("input", function(){
//   body.style.background="linear-gradient (to right, "+ color1.value +","+ color2.value +")";
// })

// let whatIsTheDay=()=>{
//   let dayname;
//   let day= new Date();
//   switch(day.getDay()){
//     case 0:
//     dayname="SU"
//     break;

//     case 1:
//     dayname="MO"
//     break;

//     case 2:
//     dayname="TU"
//     break;

//     case 3:
//     dayname="WE"
//     break;

//     case 4:
//     dayname="TH"
//     break;
        
//     case 5:
//     dayname="FR"
//     break;

//     case 6:
//     dayname="SA"
//     break;
//   }

//   console.log("Today's day is", dayname)
// }

// whatIsTheDay();

// function Adder(a,b){
//   // a=parseFloat(a);
//   // b=parseFloat(b);
//   if(isNaN(a) || isNaN(b)){
//     console.log("please provide valid number")
//   }
// else{
//   console.log(parseFloat(a)+parseFloat(b));
// }
// }

// Adder(18,12);

// const array=[2,4,8,12];
// const double=[];
// const newArray = array.forEach(num => {
//   double.push(num*2);
// });
// console.log('for each',double);

// const newArr=array.map((num) =>{
//   return num*2;
// });

// console.log('map',newArr);

// const filterArray= array.map(num =>num+5);

// console.log(filterArray);

// const reduceArray=array.reduce((accumulator,num)=>{
//   return accumulator + num; 
// },7 );
// console.log(reduceArray);

// const reduceArray= array.reduce((
  

  // class player{
  //   constructor(name,type){
  //     console.log('player',this);
  //     this.name=name;
  //     this.type=type;
  //   }
  //   introduce(){
  //     console.log(`Hi am ${this.name} ,am a ${this.type}`)
  //   }
  // }

  // class wizard extends player{
  //   constructor(name,type){
  //     super(name,type);
  //     console.log('wizard', this)
  //   }
  // }





  // const wizard1=new wizard("shelly","healer");
// const wizard2= new wizard ("merde","extinguisher");

// let obj={a:'a', b:'b', c:'c'}
// let obj2=obj;
// let clone={...obj};
// obj2.c='heloo';

// console.log(obj);
// console.log(clone);
// console.log(obj2);

// let arr=['apple','mango','grapes'];

// const detailedArray={
//   apple:1,
//   mango:4,
//   grapes:45
// };

// for (item of arr){
//   console.log(item)
// }

// for (item in detailedArray){
//   console.log(item);
// }

// for (item of detailedArray){
//   console.log(item);
// }

// for (item in arr){
//   console.log(item);
// }

// function Car(carName, carModel,carWeight,carColor){
//   this.name = carName;
//   this.model = carModel;
//   this.weight = carWeight;
//   this.color = carColor;

//   this.start = function (){
//     return "start my " + this.name;
//   };
//   this.drive = function(){
//     return "go forward " + this.name;
//   };
//   this.brake = function(){
//     return "press brake " + this.name;
//   };
//   this.stop = function(){
//     return "stop " + this.name;
//   };
// }

// let toyota = new Car("tesla","toyota",600 + "kg","white");



// console.log("abebe".toUpperCase());
// console.log("ABEBE".toLowerCase());

// console.log("merdokyos".slice(1,6));
// console.log("merdokyos".slice(6,2));
// console.log("merdokyos".slice(5,5));

// console.log("merde".split(""));
// console.log("merdokyos semeneh".split(""));
// console.log("merdokyos semeneh".split(" "));
// console.log("merdokyos-semeneh".split(""));
// console.log("merdokyos-semeneh".split(" "));
// console.log("merdokyos-semeneh".split("-"));



// function isMagicArray(a){
//   let sum=0;
//   for( i=0; i<a.length; i++){
//     let num=a[i];
//     let isPrime=true;
//     for(j=2;j<(num/2)+1; j++){
//       if(num%j==0){
//         isPrime=false;
//       }
//     }
//     if(isPrime){
//       sum=sum+num;
//     }
//   }  
//   if(a[0]==sum)
//     return 1
//   else 
//     return 0
// }
// console.log(isMagicArray([15,4,3,6,3,3,7,]));


// function isPrime(num){
//   if(num < 2){
//     return false;
//   } else if(num===2){
//     return true;
//   }
//   else{
//       for(i=2; i< (num/2+1); i++){
//         if(num%i==0){
//           return false;
//         }
//         else 
//           return true;
//       }
//   }
// }

// function isMagicArray(a){
//   let sum=0;
//   for(let j=0; j<a.length;j++){
//   if(isPrime(a[j])){
//     console.log("prime number", a[j]);
//     sum=sum+a[j];
//   }
//   console.log("sum is", sum);
//   }
//   if(sum===a[0]){
//     return 1;
//   }else 
//     return 0;
// }

// console.log(isMagicArray([24,7,2,2,3,3,7]))

// const grade = document.getElementById("gradient");
// console.log(grade.textContent);

// const color = document.getElementsByClassName("color1");
// console.log(color.textContent);

// const tag = document.getElementsByTagName("h2");
// console.log(tag.textContent);

// const su = document.getElementsByTagName("p");
// console.log(su.textContent);

// const se = document.getElementById("list");
// console.log(se.childNodes.length);
// const fr = se.children.length;

// console.log(le);
// console.log(fr);
const child = document.getElementById('su');
console.log(child.className)