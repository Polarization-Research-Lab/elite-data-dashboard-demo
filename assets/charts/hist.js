
function build () {
  const ctx = document.getElementById(
    document.currentScript.getAttribute('data-canvasid')
  ).getContext('2d')

  function randomIntegers(n, min, max) {
    const result = [];
    while (result.length < n) {
      const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!result.includes(randomInt)) {
        result.push(randomInt);
      }
    }
    return result;
  }

  const chart = new Chart(
    ctx,
    {
      type: 'bar',
      data: {
      labels: ['Liberal', ...Array.from({length: 47}, (v, i) => ''), 'Conservative'],
      datasets: [{
        label: 'Ideology',
        // data: randomIntegers(25, 20, 100).concat(randomIntegers(25, 20, 100)),
        data: [
          4, 3, 14, 8, 12, 16, 17, 20, 19, 24, 29, 33, 38, 42, 41, 51, 47, 49, 43, 39, 34, 30, 26, 21, 17, 14, 18, 12, 17, 22, 27, 32, 36, 33, 41, 48, 44, 49, 52, 41, 39, 47, 41, 45, 39, 33, 27, 22, 16, 11, 5, 3 // <-- used chatgpt to generate this list of numbers
        ],
        backgroundColor: Array.from({length: 50}, (v, i) => i < 25 ? 'rgba(54, 162, 235, 0.2)' : 'rgba(255, 99, 132, 0.2)'),
        borderColor: Array.from({length: 50}, (v, i) => i < 25 ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)'),
        borderWidth: 1
      }]
    },
      options: {
        animate: false,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            ticks: {
              // minRotation: 0,
              // maxRotation: 0,
              font: {
                size: 22,
                weight: 'bold',
              }
            },
          },
          y: {
            // ticks: {
              // beginAtZero: true
            // },
            // scaleLabel: {
              // display: true,
              // labelString: ''
            // }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
    }
  )

  chart.data.datasets[0].backgroundColor[23] = 'rgba(0,0,0,.8)';
  // chart.data.datasets[0].borderColor[18] = 'rgba(0,0,0, 1)';
  chart.update();
}

build()
