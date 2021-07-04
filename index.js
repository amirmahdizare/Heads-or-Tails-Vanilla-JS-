var flippingTimes=prompt("Enter flippingTimes")
var head=0,tails=0;
///////////////////////////////////////////
benchMark =(flippingTimes) => {
var start=Date.now()
  for(var counter=0;counter<flippingTimes;counter++)
  {
    if(flipp()==head)
      head++
    else
      tails++;
  }
 console.log("Average Processing Time is "+ ((Date.now()-start)/flippingTimes)+" ms")
}
///////////////////////////////////////////
flipp = () =>{
   if( Math.floor((Math.random()*10))%2==0)
      return head
    else
      return tails
}
/////////////////////////////////////
benchMark(flippingTimes)
console.log("Head won "+head+ " times and tails won "+ tails+ " times")
console.log( (head/flippingTimes)*100 +"% Head," +(tails/flippingTimes)*100 +"% Tails")
