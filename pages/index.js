import Pluralize from 'react-pluralize';
import Layout from '../components/Layout.js';

class App extends React.Component {
  state = {
    drinkPrice: 5,
    drinksQuantity: 1,
    hangoverHours: 1,
    hangoverThreshold: 1,
  };

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
    let { hangoverThreshold } = this.state;
    hangoverThreshold = event.target.value;
    this.setState({ hangoverThreshold });
  };

  render() {
    const Dropdown = props => (
      <select value={props.value} onChange={event => props.setValue(event)}>
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
        <style jsx>{`
          select {
            width: 20px;
            height: auto !important;
            display: inline;
            border: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            vertical-align: bottom;
            padding: 0;
            margin-left: 6px;
            color: blue;
            font-weight: strong;
          }
        `}</style>
      </select>
    );

    const { drinkPrice, drinksQuantity, hangoverHours, hangoverThreshold } = this.state;

    return (
      <Layout>
        <link rel="stylesheet" href="https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <main>
          <h1>hair.dog🐕</h1>
          <h3>I'm never drinking again. Until next time.</h3>
          <p>
            I'm going out for drinks. I'm going to have{' '}
            <Dropdown value={drinksQuantity} setValue={this.setDrinksQuantity} />{' '}
            <Pluralize singular="drink" count={drinksQuantity} showCount={false} />. I usually have a hangover if I
            drink more than <Dropdown value={hangoverThreshold} setValue={this.setHangoverThreshold} />{' '}
            <Pluralize singular="drink" count={drinksQuantity} showCount={false} />. Drinks cost about{' '}
            <Dropdown value={drinkPrice} setValue={this.setDrinkPrice} /> each, so this hangover is going to cost me at
            least ${drinksQuantity * drinkPrice} for the drinks plus {hangoverHours} useless{' '}
            <Pluralize singular="hour" count={hangoverHours} showCount={false} />. Worth it?
          </p>
          <p>
            <ul>
              <li>drinkPrice: {drinkPrice}</li>
              <li>drinksQuantity: {drinksQuantity}</li>
              <li>hangoverHours: {hangoverHours}</li>
              <li>hangoverThreshold: {hangoverThreshold}</li>
            </ul>
          </p>
        </main>
      </Layout>
    );
  }
}

export default App;
