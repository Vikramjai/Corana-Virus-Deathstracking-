document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

async function fetchData() {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    const countries = data;
    const labels = [];
    const deaths = [];

    countries.forEach(country => {
        labels.push(country.country);
        deaths.push(country.deaths);
    });

    renderChart(labels, deaths);
}

function renderChart(labels, deaths) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Deaths',
                data: deaths,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
