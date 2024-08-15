document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const timestampElement = document.getElementById('timestamp');

    function fetchSensorData() {
        fetch('http://endereco-do-seu-servidor/sensor')
            .then(response => response.json())
            .then(data => {
                const currentTime = new Date().toLocaleTimeString();
                statusElement.textContent = data.movement ? 'Movimento Detectado' : 'Sem Movimento';
                timestampElement.textContent = currentTime;
            })
            .catch(error => {
                console.error('Erro ao buscar dados do sensor:', error);
                statusElement.textContent = 'Erro ao buscar dados';
                timestampElement.textContent = 'Nunca';
            });
    }

    // Atualiza a cada 5 segundos
    setInterval(fetchSensorData, 5000);

    // Busca inicial
    fetchSensorData();
});
