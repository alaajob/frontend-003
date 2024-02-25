
let DDinput = document.querySelector(".head p .day");
let MMinput = document.querySelector(".head p .month");
let YYinput = document.querySelector(".head p .year");
let MSGs = document.querySelectorAll(".head p small");
let all_inputs = document.querySelectorAll("input");
let BTN = document.querySelector(".send");
let DaySpan = document.querySelector(".day-val span");
let MonthSpan = document.querySelector(".month-val span");
let YearSpan = document.querySelector(".year-val span");
/* calculate year  */
let myCurrentCall = new Date();
let myYear = myCurrentCall.getFullYear(); 

all_inputs.forEach(inp => {
   inp.addEventListener("keyup" , ()=>{
      console.log(inp.name);
      if(inp.name =='day'){
         if(inp.value.length > 0  && inp.value.length <= 2 ){
            if(inp.value > 0 && inp.value <= 31){
               short(0 ,true);
            }else{
               short(0 ,false);
            }
         }else{
            short(0 ,false);
         }
      }
      if(inp.name =='month'){
         if(inp.value.length > 0  && inp.value.length <= 2 ){
            if(inp.value > 0 && inp.value <= 12){
               short(1 ,true);
            }else{
               short(1 ,false);
            }
         }else{
            short(1 ,false);
         }
      }
      if(inp.name =='year'){
         if(inp.value.length > 0  && inp.value.length <= 4 ){
            if(inp.value > 0 && inp.value <= myYear){
               short(2 ,true);
            }else{
               short(2 ,false);
            }
         }else{
            short(2 ,false);
         }
      }
   });

   BTN.onclick = function calc(e){
      e.preventDefault(); 
      /* current */
      let myCurrent = new Date();
      let myCurrentDay = myCurrent.getDate();  
      let myCurrentMonth = myCurrent.getMonth() + 1; 
      let myCurrentYear = myCurrent.getFullYear(); 
      /* birth */
      let myBirthDay = DDinput.value; 
      let myBirthMonth = MMinput.value;
      let myBirthYear = YYinput.value; 
      let All_month = [31,28,31,30,31,30,31,31,30,31,30,31];
      /* referances */
      myYear = myCurrentYear;

      if(myBirthDay > myCurrentDay ){
         myCurrentDay = myCurrentDay + All_month[myCurrentMonth - 1];
         myCurrentMonth = myCurrentMonth - 1 ;
      }
      if(myBirthMonth > myCurrentMonth ){
         myCurrentMonth =  myCurrentMonth + 12;
         myCurrentYear = myCurrentYear - 1;
      }
      let calcDay = myCurrentDay -  myBirthDay;
      let calcMonth = myCurrentMonth -  myBirthMonth;
      let calcYear = myCurrentYear -  myBirthYear;

      DaySpan.innerHTML   = calcDay;
      MonthSpan.innerHTML = calcMonth;
      YearSpan.innerHTML  = calcYear;

      DDinput.value= '';
      MMinput.value= '';
      YYinput.value= '';

      let mySet = setTimeout(function(){
         MSGs[0].style.visibility = 'hidden';
         MSGs[1].style.visibility = 'hidden';
         MSGs[2].style.visibility = 'hidden';
      } , 2500); 
   }
});

function short(n ,status){
   MSGs[n].style.visibility = 'visible';
   if(status == true){
      MSGs[n].innerHTML= `<span style="color:green;font-size:20px"> <i class="fas fa-circle-check"></i> </span>`;
   }else{
      MSGs[n].innerHTML= `<span style="color:darkred;font-size:20px"> <i class="fas fa-circle-xmark"></i> </span>`;
   }
}




























































/* 

let Radios = document.querySelectorAll(".radiobtn");
let spanWeights = document.querySelector('.kg-lb') ;
let spanHeights = document.querySelector('.cm-inch');
let inputs = document.querySelectorAll(".h-w");
let inputH = document.querySelector(".h");
let inputW = document.querySelector(".w");
let BTN = document.querySelector(".btn");
let BMI;
let choice;
let msg 


Radios.forEach(radio => {
   radio.addEventListener("click" , (e)=>{
      console.log(radio.value);
      if(radio.value ==="metric"){
         spanWeights.innerHTML = "kg";
         spanHeights.innerHTML = "cm";
         choice = 1;
      }else{
         spanWeights.innerHTML = "lb";
         spanHeights.innerHTML = "in";
         choice = 2;
      }
   });
});

inputs.forEach(input =>{
   input.addEventListener("keyup" , (e)=>{
      if( input.value.length > 3){
         alert("check your numbers");
         input.value = '';
      } 
      var reg = /^\d\d\d$/;
      if((input.value).match(reg)){
         console.log(input.value);
         return input.value;
      }
   });
   function calc(in1 , in2){
      if(choice == 1){
         var bmi = (in1/in2)*10;
      }else if(choice == 2){
         var bmi = ((in1*2.5)/(in2-26))*10;
      }
      console.log (bmi);
      if(bmi <= 15){
          msg = "to fat";
          message(bmi , msg);
         console.log("to fat");
      }else if (bmi > 15 && bmi <= 35) {
         msg = "normal";
         message(bmi , msg);
         console.log("normal");
      } else {
         msg = "thin";
         message(bmi, msg);
         console.log("thin");
         
      }
   }
   

   BTN.onclick = (e)=>{
      e.preventDefault();
      calc(parseFloat(inputH.value) , parseFloat(inputW.value));
      inputH.value = '';
      inputW.value = '';
   }
   function message(BMI , msg){
      BTN.innerHTML +=`<p style="color:#fff; font-weight:900" > ~${parseInt(BMI)} - ${msg} </p>`;
   }
});
 */























