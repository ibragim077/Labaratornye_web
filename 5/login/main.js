let input_log = document.getElementById("login");
let input_pass = document.getElementById("ps1");
let input_pass2 = document.getElementById("ps2");

let login_err = document.querySelectorAll(".mistake-login");
let pass = document.querySelectorAll(".mistake-pass");
let pass2 = document.querySelectorAll(".mistake-pass2");


input_log.onkeyup = function(event){
    console.log(input_log.value);

    if(input_log.value.match(/[a-zA-Z@+-_]+/)){
        myFunc(login_err, 0);
    }else{
        myFunc1(login_err, 0);}

    if(input_log.value.length <= 150){
        myFunc(login_err, 1);
    }else{
        myFunc1(login_err, 1);}
};

input_pass.onkeyup = function(event){

    if(input_pass.value.length >= 8){
        myFunc(pass, 0);
    }else{
        myFunc1(pass, 0);
    }

    if(input_pass.value.match(/^[\d]+$/)){
        myFunc1(pass, 1);
    }else{
        myFunc(pass, 1);
    }

    if(input_pass.value != input_log.value){
        myFunc(pass, 2);
    }else{
        myFunc1(pass, 2);
    }
        
    
};
console.log(input_pass2.className)

input_pass2.onkeyup = function(){
    if(input_pass.value == input_pass2.value){
        myFunc(pass2, 0);
        input_pass2.className = "green";
    }else{
        myFunc1(pass2, 0);
        console.log("работает2")
        input_pass2.className = "red";
    }
};




function myFunc(array, i){
        array[0].children[i].className = "true";
        array[0].children[i].children[0].src='../img/State Icons.png';
};

function myFunc1(array, i){
        array[0].children[i].className = "false";
        array[0].children[i].children[0].src='../img/State.png';
};