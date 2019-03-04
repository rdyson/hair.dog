import Layout from '../components/Layout.js';

class App extends React.Component {
  state = {
    drinksQuantity: 0,
    hangoverThreshold: 0,
    timeValue: 0,
    hangoverHours: 0,
    drinkPrice: 0,
  };

  setTimeValue = event => {
    let { timeValue } = this.state;
    timeValue = event.target.value;
    this.setState({ timeValue });
  }

  setDrinksQuantity = event => {
    let { drinksQuantity, hangoverHours } = this.state;
    drinksQuantity = event.target.value;
    hangoverHours = 4 + Number(drinksQuantity);
    this.setState({ drinksQuantity, hangoverHours });
  };

  setDrinkPrice = event => {
    let { drinkPrice } = this.state;
    drinkPrice = event.target.value;
    this.setState({ drinkPrice });
  };

  setHangoverThreshold = event => {
    let hangoverThreshold = this.state;
    hangoverThreshold = event.target.value;
    this.setState({ hangoverThreshold });
  };

  render() {
    const Dropdown = props => (
      <select onChange={event => props.setValue(event)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    );

    return (
      <Layout>
        <link rel="stylesheet" href="https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <main>
          <h1>hair.dog🐕</h1>
          <h3>I'm never drinking again. Until next time.</h3>
          <p>
            I'm going out for drinks. I'm going to have <Dropdown setValue={this.setDrinksQuantity} />
            drinks. Usually, I have a hangover if I drink more than <Dropdown setValue={this.setHangoverThreshold} />
            drinks, so tomorrow it's going to take me at least {this.state.hangoverHours} hours to recover. My time is
            worth <Dropdown setValue={this.setTimeValue} /> per hour and drinks cost about <Dropdown setValue={this.setDrinkPrice} /> each, so this hangover is going to cost me at least ${this.state.drinksQuantity * this.state.drinkPrice} for the drinks plus $
            {this.state.timeValue * this.state.hangoverHours} in wasted time, for a grand total of ${(this.state.timeValue * this.state.hangoverHours) + (this.state.drinksQuantity * this.state.drinkPrice)}. Worth it?
          </p>
          <p>
            <ul>
              <li>drinksQuantity: {this.state.drinksQuantity}</li>
              <li>hangoverThreshold: {this.state.hangoverThreshold}</li>
              <li>timeValue: {this.state.timeValue}</li>
              <li>hangoverHours: {this.state.hangoverHours}</li>
              <li>drinkPrice: {this.state.drinkPrice}</li>
            </ul>
          </p>
        </main>
      </Layout>
    );
  }
}

export default App;
