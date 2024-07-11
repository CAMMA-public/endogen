const API_KEY = 'YOUR_GOOGLE_SHEETS_API_KEY';
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
const RANGE = 'Sheet1!A2:C';  // Adjust range as necessary

async function fetchLeaderboard() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.values;
}

function updateLeaderboard(data) {
    const tbody = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';  // Clear existing data

    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${row[0]}</td>
            <td>${row[1]}</td>
        `;
        tbody.appendChild(tr);
    });
}

async function init() {
    const leaderboardData = await fetchLeaderboard();
    updateLeaderboard(leaderboardData);
}

// Refresh leaderboard every minute
setInterval(init, 60000);

// Initial load
init();
