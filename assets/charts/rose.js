
function build () {
  const ctx = document.getElementById(
    document.currentScript.getAttribute('data-canvasid')
  ).getContext('2d')

  const chart = new Chart(
    ctx,
    {
      type: 'polarArea',
      data: {
        labels: ['Insulting Language', 'Name Calling', 'Anger', 'Blaming the Other Side', 'Policy Discussion', 'Bipartisan Compromise'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [1,2,5,9,3,5],
            // backgroundColor: [
            //   'rgba(0,0,0,.4)',
            //   'rgba(0,0,0,.4)',
            //   'rgba(0,0,0,.4)',
            //   'rgba(0,0,0,.4)',
            //   'rgba(0,0,0,.4)',
            // ]
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
          }
        }
      },

    }
  )
}

build()
