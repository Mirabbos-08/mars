const body=document.getElementsByTagName("body")[0];
const btn=document.getElementById("btn");
const parol=document.getElementById("parol");
const nomer=document.getElementById("number");
const koz=document.getElementById("koz");
const box2=document.getElementById("box2");
const btn3=document.getElementById("btn3");
const coin=document.getElementById("coin");
const thndr=document.getElementById("thndr");

localStorage.setItem("ism","MIRABBOS SOBITJONOV")
localStorage.setItem("ism","MIRABBOS SOBITJONOV")
localStorage.setItem("coin","79999 coin")



koz.addEventListener("click",()=>{
    if(parol.type=="password"){
        parol.type="text";
    }else{
        parol.type="password"
    }
});

parol.addEventListener("input",()=>{
    if(nomer.value.length>3 && parol.value.length>3){
        btn.disabled=false;
        btn.style.backgroundColor="orangered"
    }else{
        btn.disabled=true;
        btn.style.backgroundColor="#F69E86";
    }
})

btn.addEventListener("click",()=>{
    if(parol.value=="1234" && nomer.value=="mars"){
      box.style.display="none";
      box2.style.display="block"
    }
    else{
        alert("Login yoki parol xato!")
    }
});

parol.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        if(parol.value=="1234" && nomer.value=="mars"){
            box.style.display="none";
            box2.style.display="block"
        }
        else{
            alert("Login yoki parol xato!")
        }
    }
})
btn3.addEventListener("click",()=>{
    box.style.display="block";
    box2.style.display="none"
    
})