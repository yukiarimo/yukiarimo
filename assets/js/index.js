// load data.json
fetch('./assets/db/index.json')
    .then(response => response.json())
    .then(data => {
        var jsonData = data;

        // Function to populate the list
        function populateList(data, id) {
            // Get the list element
            const list = document.getElementById(id);

            // Check if data is defined and is an array
            if (data && Array.isArray(data)) {
                // Create a template string for the list items
                const template = data.map((item) => `
            <li class="block-list-e">
                <a href="${item.url || '#'}" target="_parent">${item.title}</a>
                <p>${item.description}</p>
            </li>
        `).join('');

                // Set the innerHTML of the list to the template
                list.innerHTML = template;
            } else {
                console.error("Data is undefined or not an array:", data);
            }
        }

        // Populate the lists
        populateList(jsonData.philosophy.articles["2024"], "philosophy-articles-2024");
        populateList(jsonData.philosophy.articles["2023"], "philosophy-articles-2023");

        populateList(jsonData.philosophy.podcasts["2024"], "philosophy-podcasts-2024");
        populateList(jsonData.philosophy.podcasts["2023"], "philosophy-podcasts-2023");

        populateList(jsonData.work.researches["2024"], "work-researches-2024");
        populateList(jsonData.work.researches["2023"], "work-researches-2023");

        populateList(jsonData.work.projects["2024"], "work-projects-2024");
        populateList(jsonData.work.projects["2023"], "work-projects-2023");

        populateList(jsonData.creativity.songs["2024"], "creativity-songs-2024");
        populateList(jsonData.creativity.songs["2023"], "creativity-songs-2023");

        populateList(jsonData.creativity.books["2024"], "creativity-books-2024");
        populateList(jsonData.creativity.books["2023"], "creativity-books-2023");

        populateList(jsonData.creativity.art["2024"], "creativity-art-2024");
        populateList(jsonData.creativity.art["2023"], "creativity-art-2023");

        populateList(jsonData.creativity.photography["2024"], "creativity-photography-2024");
        populateList(jsonData.creativity.photography["2023"], "creativity-photography-2023");
    });

function AutoScaleBeta() {
    var topbar = document.querySelector('.topbar-o');
    var blocko = document.querySelector('.block-o');

    if (topbar && blocko) {
        var topbarHeight = topbar.offsetHeight;

        // Set margin-top for .block-o
        blocko.style.marginTop = `calc(${topbarHeight}px)`;
    }
}

AutoScaleBeta()

function toggleMenu() {
    const mobileContextMenu = document.getElementById('mobileContextMenu');
    mobileContextMenu.style.display === 'block' ? mobileContextMenu.style.display = 'none' : mobileContextMenu.style.display = 'block';
}

function navigate(sectionId) {
    window.open(sectionId, '_parent');
    // For simplicity, just close the menu in this example
    toggleMenu();
}