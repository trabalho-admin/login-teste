'use strict'
const inputName = document.querySelector('#inputName');//referencia ao input do nome do usuario
const inputPassword = document.querySelector('#inputPassword');//referencia ao input da senha do usuario
const formBtn = document.querySelector('#formButton');//referencia o botão do formularia
/*
formBtn.addEventListener('click',()=>{
    if( inputName.value ==''){
        //se o campo nome estiver vazio entao:
        alert('O campo nome não pode estar vazio.');
            }
            else if(inputPassword.value ==''){
        //se o campo senha estiver vazio entao:
        alert('O campo senha não pode estar vazio.');
        
            }
            else{
            //se os 2 input nao forem vazios entao:
            alert('validado com sucesso')
                return true;
            }
});
*/

const login = true;
const signUp = false;

function verifica(){//funcional
    if( inputName.value ==''){
//se o campo nome estiver vazio entao:
alert('O campo nome não pode estar vazio.');
    }
    else if(inputPassword.value ==''){
//se o campo senha estiver vazio entao:
alert('O campo senha não pode estar vazio.');

    }
    else{
    //se os 2 input nao forem vazios entao:
    alert('validado com sucesso')
        return true;
    }
}

function changeButtonFunction(){
    if(login){

        
    }
}