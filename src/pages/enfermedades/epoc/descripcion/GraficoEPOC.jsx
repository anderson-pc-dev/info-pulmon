import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficoEPOC = () => {
  const data = {
    labels: ['África', 'Américas', 'Mediterráneo Oriental', 'Europa', 'Asia Sudoriental', 'Pacífico Occidental'],
    datasets: [
      {
        label: 'Prevalencia de EPOC (%)',
        data: [4.1, 8.2, 5.7, 6.4, 7.9, 9.3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Prevalencia de EPOC por Región (OMS)',
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y}% de la población adulta`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Porcentaje de población afectada'
        },
        max: 15
      },
      x: {
        title: {
          display: true,
          text: 'Regiones de la OMS'
        }
      }
    },
  };

  return (
    <div className="grafico-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoEPOC;