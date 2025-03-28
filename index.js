document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetch-btn").addEventListener("click", fetchIdeas);
});

function fetchIdeas() {
    fetch('https://your-api-name.railway.app/api/business-ideas') // Replace with your real API URL
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('ideas-container');
            container.innerHTML = ""; // Clear previous data
            data.forEach(idea => {
                const ideaCard = document.createElement('div');
                ideaCard.classList.add('idea-card');
                ideaCard.innerHTML = `<h3>${idea.name}</h3><p>Category: ${idea.category}</p>`;
                container.appendChild(ideaCard);
            });
        })
        .catch(error => console.error('Error fetching ideas:', error));
}
