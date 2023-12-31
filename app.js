var ramadan = new Date("2024-03-10  00:00:00").getTime()
var recentTime = new Date().getTime()
 var differnce = ramadan - recentTime
 var days = Math.floor(differnce /(1000*60*60*24) )
 var hours = Math.floor((differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minute = Math.floor((differnce % (1000 * 60 * 60 )) / (1000 * 60 ));
 var second = Math.floor((differnce % (1000 * 60 )) / (1000 ));


 var countArr = [days , hours , minute] 
 console.log(countArr)

 var countParent = document.getElementById('boxes')

 countParent.innerHTML =    `
 <div class="box1" >
 <p> ${countArr[0]} </p>
 </div>

 <div class="box1" >
 <p> ${countArr[1]} </p>
 </div>

 <div class="box1" >
 <p> ${countArr[2]} </p>
 </div>
 `
//  countParent.innerHTML = 
//  `
//  <div class="box1">
//  <p>7</p>
// </div>


//  `