function getname(){
  var randomnumber1 = Math.random(1,7)*6;
  randomnumber1=Math.round(randomnumber1);

  var randomnumber2=Math.random(1,7)*6;
  randomnumber2=Math.round(randomnumber2);

  var name1=prompt("Enter Player 1 Name: ")
  document.querySelectorAll("p")[0].innerHTML=name1;

  var name2=prompt("Enter Player 2 Name: ")
  document.querySelectorAll("p")[1].innerHTML=name2;

  var ico=document.querySelectorAll("img")[0];
  ico.setAttribute("src","images/happiness.png")

  var randomdiceimage1="images/dice"+randomnumber1+".png";
  var image1=document.querySelectorAll("img")[1];
  image1.setAttribute("src",randomdiceimage1);

  var randomdiceimage2="images/dice"+randomnumber2+".png";
  var image2=document.querySelectorAll("img")[2];
  image2.setAttribute("src",randomdiceimage2);


  if(randomnumber1>randomnumber2){
    // alert(name1+" Wins 🚩");
    document.querySelector("h1").innerHTML=name1+" Wins 🚩";
  }
  else if(randomnumber2>randomnumber1){
    // alert(name2+" Wins 🚩");
    document.querySelector("h1").innerHTML=name2+" Wins 🚩";
  }
  else{
    // alert("Draw!!!🚩");
    document.querySelector("h1").innerHTML="🚩Draw!!!";
  }
  

}
