
function build () {
  const ctx = document.getElementById(
    document.currentScript.getAttribute('data-canvasid')
  ).getContext('2d')

  const chart = new Chart(
    ctx,
    {
      type: 'polarArea',
      data: {
        labels: ['Insulting Language', 'Blame the other side', 'Credit Claiming', 'Compromising Language', 'Policy Discussion', 'Legislative Discussion', 'Foreign Policy'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30, 15, 25, 20, 17],
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 12
              }
            },
            max: 40,
            ticks: {
              callback: function(value, index, values) {
                return value + '%'; // modify the callback to add the percentage symbol
              }
            }
          }
        },
        plugins: {
          legend: {
            // position: 'top',
            display: false,
          },
          title: {
            display: false,
            text: '...'
          },
          tooltip: {
            callbacks: {
                label: function(context) {
                    return context.formattedValue + '%'
                }
            }
          },
        }
      },

    }
  )
}

build()
