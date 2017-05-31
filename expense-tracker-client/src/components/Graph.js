import React from 'react';
var LineChart = require("react-chartjs").Bar;

export default class Graph extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      chartData: {
        labels: ["Recreation", "Living", "Food", "Utilities", "Travel", "Education", "Family", "Charity"],
        datasets: [{
                label: 'Dollar Amount',
                data: props.expenseData,
                fillColor: ["#FFC053"],
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                    borderWidth: 1
                }]
        },
        chartOptions: {
          scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
           }
        }
    }
  }

  componentWillReceiveProps(newProps){
    let newData = {
      chartData: {
        labels: ["Recreation", "Living", "Food", "Utilities", "Travel", "Education", "Family", "Charity"],
            datasets: [{
                label: 'Dollar Amount',
                data: newProps.expenseData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    }
    this.setState(Object.assign({}, this.state, newData))
  }

  render() {
    if (this.props.expenseData.length > 0){
      console.log(this.state.chartData.datasets[0].data)
      return (
        <div className="graph">
          <LineChart data={this.state.chartData} options={this.state.chartOptions} width="1350" height="350" />
        </div>
      )
    }else{
      return null
    }
  }
};
