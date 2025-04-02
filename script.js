function verificarSenha() {
    var senhaCorreta = "Stella"; // Troque pelo seu nome ou outra resposta certa
    var senhaDigitada = document.getElementById("senha").value;
    
    if (senhaDigitada.toLowerCase() === senhaCorreta.toLowerCase()) {
        Swal.fire({
            title: "Acertou, docinho! 🎉",
            text: "Você pode avançar para o jogo ❤️",
            icon: "success",
            confirmButtonText: "Continuar"
        }).then(() => {
            window.location.href = "intro.html"; // Redireciona após o alerta
        });
    } else {
        Swal.fire({
            title: "Você errou? 😡",
            text: "Tente de novo, amor 💕",
            icon: "error", // Corrigido aqui
            confirmButtonText: "Tentar novamente"
        });
    }
}

document.getElementById('close-message').addEventListener('click', function() {
    document.querySelector('.mensagem').style.display = 'none';
});


const images = [
    "carrinho.png", "garota.jpg", "picole.jpg", "logo.png","sorvete.png","volume-alto.png","volume-baixo.png","urso.png","pinguim.png","bloqueio.png","sorveteria.png","sorvetinhos.jpg",
    "carrinho.png", "garota.jpg", "picole.jpg", "logo.png","sorvete.png","volume-alto.png","volume-baixo.png","urso.png","pinguim.png","bloqueio.png","sorveteria.png","sorvetinhos.jpg",
];
images.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById("gameBoard");
let firstCard = null;
let secondCard = null;
let lockBoard = false;

images.forEach(image => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const img = document.createElement("img");
    img.src = image;
    card.appendChild(img);
    
    card.addEventListener("click", () => {
        if (lockBoard || card.classList.contains("flipped")) return;
        card.classList.add("flipped");
        
        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            lockBoard = true;
            
            if (firstCard.children[0].src === secondCard.children[0].src) {
                firstCard = null;
                secondCard = null;
                lockBoard = false;
                
            } else {
                setTimeout(() => {
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                    firstCard = null;
                    secondCard = null;
                    lockBoard = false;
                }, 1000);
            }
        }
    });
    
    gameBoard.appendChild(card);
});