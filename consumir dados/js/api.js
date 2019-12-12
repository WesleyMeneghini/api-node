const $name = document.getElementById("txt_name");
const $btnRegister = document.getElementById("btn_register");









const inserirRegistro = () =>{
    const url = `http://10.107.140.42:3000/clients`;

    const dadosCliente = {"nome": $name.value};


    const opcao = { 
        method : "post",
        headers : {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body : JSON.stringify(dadosCliente)
    };
    console.log(opcao);


    fetch(url, opcao).then(res => res.json()).then( data => console.log (data));

    // console.log(client);
    // dadosCliente = JSON.stringify(dadosCliente);
    // console.log(JSON.stringify(dadosCliente));

}




const eventos = () =>{

    $btnRegister.addEventListener('click', () => inserirRegistro());
}

eventos();