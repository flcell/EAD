// Abre o modal com o título do setor selecionado
function openModal(sectorName, link) {
    selectedSector = sectorName;
    whatsappLink = link; // Armazena o link do WhatsApp do setor
    document.getElementById('userMessage').value = '';
    document.getElementById('thankYouMessage').style.display = 'none';
    resetStars();
    document.getElementById('messageModal').style.display = 'flex';
}

// Fecha o modal
function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
}

// Sistema de permissões (simulador)
function requestPermissions() {
    alert('Simulação: Permissão de câmera e armazenamento concedida para envio de anexos.');
}

// Envia a mensagem via WhatsApp
function sendMessage() {
    const message = document.getElementById('userMessage').value;
    const starRating = selectedStars;
    const fullMessage = `Setor: ${selectedSector}\nMensagem: ${message}\nAvaliação: ${starRating} estrelas`;

    // Link WhatsApp
    const whatsappFinalLink = `${whatsappLink}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappFinalLink, '_blank');

    document.getElementById('thankYouMessage').style.display = 'block';
}

// Sistema de Avaliação
function rate(stars) {
    resetStars();
    selectedStars = stars;
    for (let i = 0; i < stars; i++) {
        document.getElementById('stars').children[i].classList.add('selected');
    }
}

// Reseta as estrelas
function resetStars() {
    const starElements = document.getElementById('stars').children;
    for (let star of starElements) {
        star.classList.remove('selected');
    }
    selectedStars = 0;
}