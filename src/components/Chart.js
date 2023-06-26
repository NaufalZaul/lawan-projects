import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

export default function chart() {
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

  const ctx = document.getElementById('myChart')


  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      datasets: [{
        label: '# of Votes',
        data: [10, 20, 30, 40, 10, 20, 30, 5, 20, 30, 25, 20],
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
};
