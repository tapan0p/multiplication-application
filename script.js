var score=0;
var num1=0;
var num2=0;
function setquestion(){
    num1=Math.floor(Math.random()*10)+1;
    num2=Math.floor(Math.random()*10)+1;
    document.getElementById("question").innerHTML="What is "+num1+" multiply "+num2+"?";
}
setquestion();
function check(){
    
    let input=document.getElementById("ans").value;
    if(input==""){
        return;
    }
    input=parseInt(input);
    if(input===num1*num2){
        var score=document.getElementById("scoreval").innerHTML;
        score=parseInt(score)+1;
        document.getElementById("scoreval").innerHTML=score;
        document.getElementById("scoreval").style.color="blue";
    }
    else{
        var score=document.getElementById("scoreval").innerHTML;
        score=parseInt(score)-1;
        document.getElementById("scoreval").innerHTML=score;
        document.getElementById("scoreval").style.color="red";
    }
    document.getElementById("ans").value=null;
    setquestion();
}
