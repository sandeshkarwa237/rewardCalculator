import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {points: 0, amount : 0};
    this.updateValue = this.updateValue.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateValue(event) {
    this.setState({ amount: event.target.value });
  }

  calculate(event) {
    const { amount } = this.state;
    event.preventDefault();
      if(amount>=50) {
        const points = Math.max((amount-100)*2, 0) + 50;
        this.setState({points});
      }

  }

  render() {
    const { points, amount } = this.state;
    return (
      <div className="container">          
        <div className="row">
          <form role="form" className="form-signin" onSubmit={this.calculate}>
            <h3 className="form-signin-heading">Enter amount</h3>            
            <input type="text" className="form-control" onChange={this.updateValue} value={amount} />                        
            <div className="buttonALignment">
              <button className="btn btn-lg btn-primary btn-block" onClick={this.calculate}>Calculate</button>
            </div> 
            <div className="text-center">Reward points : {points}</div>
          </form>          
        </div>               
      </div>      
    );
  }
}

export default App;
