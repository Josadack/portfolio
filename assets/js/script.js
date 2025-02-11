const sobre = document.querySelector("#about");

const formulario = document.querySelector("#formulario");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


async function getApiGithub(){
    try {
        
        const dadosPerfil = await fetch(`https://api.github.com/users/Josadack`);
     
        const perfil = await dadosPerfil.json();

        let conteudo = `
            <img src="${perfil.avatar_url}" alt="Foto do perfil do Github - ${perfil.name}">
       

        <article id="about_texto">
            <h2>Sobre mim</h2>
            <p>Olá! Sou Josadaque Ferreira, um desenvolvedor júnior apaixonado por Java, Spring Boot, SQL e JavaScript. Acredito que a tecnologia pode transformar o mundo e estou comprometido em usar minhas habilidades para construir soluções inovadoras e eficientes. Neste blog, compartilho meus conhecimentos, experiências e reflexões sobre o mundo do desenvolvimento de software.</p>
            
            <div id="about_guithub" class="flex sobre_github">
                <a href="${perfil.html_url}" target="_blank" class="botao"> Github</a>
                <p> ${perfil.followers} Seguidores </p>
                <p> ${perfil.public_repos} Repositórios </p>
            </div>
        </article>
        
        `
        sobre.innerHTML += conteudo;

    } catch (error) {
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();//impede que o formulario seja automaticamente enviado!

    //validação do formulario Nome
    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O Nome deve ter no minimo tres caracteres";
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = ""
    }
    //validação do formulario E-mail
    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um -email válido.";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = ""
    }


    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo cinco caracteres";
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = ""
    }
    
    formulario.submit();
} )

getApiGithub();