oujdaMarker.bindPopup(`<a href="#" data-izimodal-open="#modal" data-izimodal-transitionin="fadeInDown">Click me</a>`)

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
    type: 'line',
    data,
    options: {}
  };
  
$("#modal").iziModal({
    title: 'Oujda',
    subtitle: 'Data Visualization & Predictions',
    headerColor: '#88A0B9',
    background: null,
    theme: 'dark',  // light
    content: "<p>Example</p> <div><canvas id='myChart'></canvas></div>",
})

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);