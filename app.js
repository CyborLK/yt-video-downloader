document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const videoUrl = document.getElementById('videoUrl').value;
    const statusMessage = document.getElementById('statusMessage');

    fetch('/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            statusMessage.textContent = data.message;
            statusMessage.style.color = 'green';
        } else {
            statusMessage.textContent = data.error;
            statusMessage.style.color = 'red';
        }
    })
    .catch((error) => {
        statusMessage.textContent = 'Error: ' + error.message;
        statusMessage.style.color = 'red';
    });
});
