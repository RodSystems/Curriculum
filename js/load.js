
//const load = () => {    
    //new BackToTop();    

    //this.element = document.querySelector('.footer .btn_back-to-top');
//}

function abrirAba(abaNome) {
    var i, x;
    x = document.getElementsByClassName("containerAba");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(abaNome).style.display = "block";
  }

async function enviar(){    
    const name = document.querySelector(".field-name").value;
    const assunto = document.querySelector(".field-assunto").value;
    const email = document.querySelector(".field-email").value;
    const mensagem = document.querySelector(".field-mensagem").value;

    //console.log(name, assunto, email, mensagem);

    //alert(name);

    const msg = {
        from: "rodrigo_rangel@acessoria.app", 
        to: email,
        subject: assunto,
        text: `
            Nome: ${name}
            Email: ${email}
            Mensagem: ${mensagem}
        `
    };


    try{
        //console.log(msg);

        const data = await fetch('https://fiap-sender.herokuapp.com/email/send',
            {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                         },
                body: JSON.stringify(msg),
            }
        );
        console.log(data);
        
        alert("Email enviado com sucesso!");
        
        document.querySelector(".field-name").value = "";
        document.querySelector(".field-assunto").value = "";
        document.querySelector(".field-email").value = "";
        document.querySelector(".field-mensagem").value = "";

    }
    catch(err){
        console.error(err);
        alert("Email não enviado, tente novamente!");
    }

    //console.log(document.querySelector(".field-name"));
    //console.log(document.querySelector(".field-assunto"));
    //console.log(document.querySelector(".field-email"));
    //ßconsole.log(document.querySelector(".field-mensagem"));
    //alert("teste");


    $(document).ready(function() {
        $('#subir').click(function(){
            $('html, body').animate({scrollTop:0}, 'slow');
            return false;
        });
    });

}