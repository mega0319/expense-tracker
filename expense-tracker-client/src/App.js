import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import InfoContainer from './components/InfoContainer'

import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/categories" component={InfoContainer} />
        <Route exact path="/about"  render={() =>  <h3> This is an app for people who like check-ledgers!</h3>}/>
      </div>
    );
  }
}

export default App;



// let chartData = {
//   labels: ["Recreation", "Living", "Food", "Utilities", "Travel", "Education", "Family", "Charity"],
//   datasets: [{
//       label: 'Dollar Amount',
//       data: props.expenseData,
//       backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//           'rgba(255,99,132,1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//   }]
// }
//
// this.setState(prevState => {
//   let datasets = prevState.chartData.datasets[0]
//   datasetsObj = Object.assign({}, datasets, {data: props.expenseData} )
//   return Object.assign({}, prevState.chartData, {datasets: [datasetsObj]})
// })
