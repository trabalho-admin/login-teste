'use strict'
//const inputName = document.querySelector('#inputName');//referencia ao input do nome do usuario
//const inputPassword = document.querySelector('#inputPassword');//referencia ao input da senha do usuario
const formBtn2 = document.querySelector('#formButton2');//referencia o botão do formularia

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
    inputName.value ='';
    inputPassword.value = '';
        return true;
    }
}

function createUser(nome, senha){//funcional
    if(verifica()==true ){
        user.name = nome;
        user.password = senha;
        localStorage.setItem('School_Game_User:'+user.name, JSON.stringify(user));
        console.log(user);
        }else {
        alert('Este usuário ja existe!, não foi possivel registrar este usuário\n tente novamente.')
    }
    }

    


function getUser(username){
    let key = 'School_Game_User:'+username;
    if(localStorage.getItem(key) == null){//se o usuario nao existir entao:
        alert('o usuario nao existe')
        return false;
    } 
    else if( localStorage.getItem(key) != null ||  localStorage.getItem(key) != undefined){
    //se o usuario existir entao:
        let obj = JSON.parse(localStorage.getItem(key));//acessa as informaçoes do usuario e as trasforma de objeto para string
        console.log(obj)
        return obj;
    }
}

function deleteUser(username){//funcional
localStorage.removeItem('School_Game_User:'+username);//exclui o usuario solicitado
}




/*

formBtn.addEventListener('click',()=>{//adiciona a funcao verifica ao botao
    createUser(inputName.value, inputPassword.value);
})

formBtn2.addEventListener('click', ()=>{
    getUser(inputName.value)
})

*/