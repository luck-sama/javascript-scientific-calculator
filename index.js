let result=0;

let display = "";

let a;
let b;
let operatorkey = "";

document.getElementById("keyac").onclick = function(){
    result=0;
    display="";
    a = 0;
    b = 0;
document.getElementById("display").innerHTML = "0"
}

document.getElementById("keyback").onclick = function(){
    display = display.slice(0,-1);
    document.getElementById("display").innerHTML = display;

}

document.getElementById("key1").onclick = function(){
    display +=1
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key2").onclick = function(){
    display +=2
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key3").onclick = function(){
    display +=3
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key4").onclick = function(){
    display +=4
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key5").onclick = function(){
    display +=5
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key6").onclick = function(){
    display +=6
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key7").onclick = function(){
    display +=7
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key8").onclick = function(){
    display +=8
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key9").onclick = function(){
    display +=9
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key0").onclick = function(){
    display +=0
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key00").onclick = function(){
    display +="00"
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key.").onclick = function(){
    display +="."
    document.getElementById("display").innerHTML = display;
}

document.getElementById("key+").onclick = function(){

    a = display;
    a = Number(a);
    operatorkey = "+"
    display=""
    document.getElementById("display").innerHTML = "+" ;
    
}

document.getElementById("key-").onclick = function(){
    a = display;
    a = Number(a);
    operatorkey = "-"
    display=""
    document.getElementById("display").innerHTML = "-" ;
    
}

document.getElementById("key*").onclick = function(){
    a = display;
    a = Number(a);
    operatorkey = "*"
    display=""
    document.getElementById("display").innerHTML = "*" ;
    
}

document.getElementById("key/").onclick = function(){
    a = display;
    a = Number(a);
    operatorkey = "/"
    display=""
    document.getElementById("display").innerHTML = "/" ;
    
}

document.getElementById("keymodulet").onclick = function(){
    a = display;
    a = Number(a);
    operatorkey = "moculet"
    display=""
    document.getElementById("display").innerHTML = "Modulet of" ;
    
}

document.getElementById("key²").onclick = function(){

    let tempnum = display;
    tempnum = Number(tempnum);
    tempnum = Math.pow(tempnum,2);
    display = tempnum;
    display = String(display);

    document.getElementById("display").innerHTML = display

}

document.getElementById("key³").onclick = function(){

    let tempnum = display;
    tempnum = Number(tempnum);
    tempnum = Math.pow(tempnum,3);
    display = tempnum;
    display = String(display);

    document.getElementById("display").innerHTML = display

}

document.getElementById("keysquare").onclick = function(){

    let tempnum = display;
    tempnum = Number(tempnum);
    tempnum = Math.sqrt(tempnum);
    display = tempnum;
    display = String(display);

    document.getElementById("display").innerHTML = display
}

document.getElementById("key∛").onclick = function(){

    let tempnum = display;
    tempnum = Number(tempnum);
    tempnum = Math.cbrt(tempnum);
    display = tempnum;
    display = String(display);

    document.getElementById("display").innerHTML = display
}

document.getElementById("key∛").onclick = function(){

    let tempnum = display;
    tempnum = Number(tempnum);
    tempnum = Math.cbrt(tempnum);
    display = tempnum;
    display = String(display);

    document.getElementById("display").innerHTML = display
}

document.getElementById("key%").onclick = function(){
    a = display;
    a = Number(a);
    operatorkey = "%";
    display = "";
    document.getElementById("display").innerHTML = "%"
}


document.getElementById("key=").onclick = function(){
    b = display;
    b = Number(b)

    if(operatorkey === "+"){
        result = a+b;

        document.getElementById("display").innerHTML = result;
    }

    else if(operatorkey === "-"){
        result = a-b;

        document.getElementById("display").innerHTML = result;
    }

    else if(operatorkey === "*"){
        result = a*b;

        document.getElementById("display").innerHTML = result;
    }

    else if(operatorkey === "/"){
        result = a/b;

        document.getElementById("display").innerHTML = result;
    }

    else if(operatorkey === "modulet"){
        result = a%b;

        document.getElementById("display").innerHTML = result;
    }

    else if(operatorkey === "%"){
        result = a * ( b/100)

        document.getElementById("display").innerHTML = result;

    }

else
document.getElementById("display").innerHTML = "Error"
}