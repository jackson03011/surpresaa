function showAlert() {
    alert('Você disse SIM! Estou muito feliz!');
    document.getElementById('romanticMusic').play();
    document.getElementById('romanticImage').style.display = 'block'; // Mostra a imagem
    document.getElementById('attributes').classList.add('show');
    document.getElementById('advantages').classList.add('show-advantages'); // Mostra a mensagem

    // Oculta os botões
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
}

function moveButton() {
    const button = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
