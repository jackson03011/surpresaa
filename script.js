document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const timestampElement = document.getElementById('timestamp');

    function fetchSensorData() {
        fetch('http://SEU_IP_PUBLICO:3000/sensor')
            .then(response => response.json())
            .then(data => {
                statusElement.textContent = data.movement ? 'Movimento Detectado' : 'Sem Movimento';
                timestampElement.textContent = data.timestamp;
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
