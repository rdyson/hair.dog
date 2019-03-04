import Pluralize from 'react-pluralize';
import Layout from '../components/Layout.js';

class App extends React.Component {
  state = {
    drinkPrice: 5,
    drinksQuantity: 1,
    hangoverHours: 0,
    hangoverThreshold: 1,
  };

  setDrinksQuantity = event => {
    let { drinksQuantity, hangoverHours, hangoverThreshold } = this.state;
    drinksQuantity = event.target.value;
    hangoverHours =
      Number(drinksQuantity) > Number(hangoverThreshold) ? 2 + 2 * (drinksQuantity - hangoverThreshold) : 0;
    this.setState({ drinksQuantity, hangoverHours });
  };

  setDrinkPrice = event => {
    let { drinkPrice } = this.state;
    drinkPrice = event.target.value;
    this.setState({ drinkPrice });
  };

  setHangoverThreshold = event => {
    let { drinksQuantity, hangoverHours, hangoverThreshold } = this.state;
    hangoverThreshold = event.target.value;
    hangoverHours =
      Number(drinksQuantity) > Number(hangoverThreshold) ? 2 + 2 * (drinksQuantity - hangoverThreshold) : 0;
    this.setState({ hangoverThreshold, hangoverHours });
  };

  render() {
    const dropdownOptions = [];
    for (let i = 0; i <= 20; i += 1) {
      dropdownOptions.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    const Dropdown = props => (
      <select value={props.value} onChange={event => props.setValue(event)}>
        {dropdownOptions}
        <style jsx>{`
          select {
            width: 45px;
            height: auto !important;
            display: inline;
            border: 1px dotted;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 8px;
            vertical-align: baseline;
            padding: 0;
            margin-left: 6px;
            margin-right: 2px;
            color: blue;
            background-color: #eee;
          }
        `}</style>
      </select>
    );

    const { drinkPrice, drinksQuantity, hangoverHours, hangoverThreshold } = this.state;

    return (
      <Layout>
        <link rel="stylesheet" href="https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto|Pacifico|Catamaran" rel="stylesheet" />
        <main>
          <h1>hair.dog 🐕</h1>
          <h2>“I'm never drinking again” Mad Libs</h2>
          <p className="madlib">
            I'm going out for drinks. I'm going to have{' '}
            <Dropdown value={drinksQuantity} setValue={this.setDrinksQuantity} />{' '}
            <Pluralize singular="drink" count={drinksQuantity} showCount={false} />. I usually have a hangover if I
            drink more than <Dropdown value={hangoverThreshold} setValue={this.setHangoverThreshold} />{' '}
            <Pluralize singular="drink" count={hangoverThreshold} showCount={false} />. Drinks cost about $
            <Dropdown value={drinkPrice} setValue={this.setDrinkPrice} /> each, so this hangover is going to cost me at
            least{' '}
            <strong>
              ${drinksQuantity * drinkPrice} for the drinks plus {hangoverHours} useless{' '}
              <Pluralize singular="hour" count={hangoverHours} showCount={false} />
            </strong>
            . Worth it?
          </p>
          <p>
            <ul>
              <li>drinkPrice: {drinkPrice}</li>
              <li>drinksQuantity: {drinksQuantity}</li>
              <li>hangoverHours: {hangoverHours}</li>
              <li>hangoverThreshold: {hangoverThreshold}</li>
            </ul>
          </p>
          <h2>What is this?</h2>
          <p>
            The original idea was to build a hangover calculator that told you, based on your age, gender, race, and
            how/what you were planning to drink, how much suffering you could expect the next day. Unfortunately there
            is very little (as in, a couple of published studies) about hangovers.
          </p>
          <p>
            So this is just a simple calculator that doesn't do much of anything, apart from perhaps pushing you to
            think ahead about that ninth Jägerbomb.
          </p>
          <p>
            There are a couple of assumptions:
            <ol>
              <li>
                If you’re going to have a hangover, it's going to last at least 4 hours. Each additional drink add 2
                hours to your hangover. There is absolutely no science to back this up.
              </li>
              <li>
                Hangover hours are typically useless. Don't tell me that watching The Office for the fourth time is
                useful.
              </li>
              <li>
                Each additional drink past your hangover threshold is going to cause the same amount of suffering. In
                practice this isn't true, at least not for me.
              </li>
              <li>You're only buying drinks for yourself.</li>
            </ol>
          </p>
          <h2>What does the research say?</h2>
          <p>
            Ut augue libero, pellentesque id consequat nec, finibus non tortor. Pellentesque elementum nisl eu odio
            bibendum, eget consectetur metus tempus. Vestibulum sollicitudin lorem sit amet volutpat semper. Donec
            tincidunt erat in velit consectetur pulvinar. Donec eu nunc lectus. Suspendisse potenti. Morbi tristique
            aliquam volutpat. Ut augue libero, pellentesque id consequat nec, finibus non tortor. Pellentesque elementum
            nisl eu odio bibendum, eget consectetur metus tempus. Vestibulum sollicitudin lorem sit amet volutpat
            semper. Donec tincidunt erat in velit consectetur pulvinar. Donec eu nunc lectus. Suspendisse potenti. Morbi
            tristique aliquam volutpat.
          </p>
          <p>
            Ut augue libero, pellentesque id consequat nec, finibus non tortor. Pellentesque elementum nisl eu odio
            bibendum, eget consectetur metus tempus. Vestibulum sollicitudin lorem sit amet volutpat semper. Donec
            tincidunt erat in velit consectetur pulvinar. Donec eu nunc lectus. Suspendisse potenti. Morbi tristique
            aliquam volutpat.
          </p>
          <h2>Additional Reading</h2>
          <ul>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ul>
        </main>
        <footer>
          <a href="https://github.com/rdyson/hair.dog">source</a>
        </footer>
        <style jsx>{`
          h1 {
            font-family: 'Pacifico';
            color: #ee6836;
            margin-bottom: 50px;
          }
          h2 {
            font-size: 28px;
            font-weight: bold;
            font-family: 'Catamaran';
            color: #777;
            margin-top: 50px;
          }
          a,
          p,
          li {
            color: #555;
            font-family: 'Catamaran';
            line-height: 35px;
          }
          strong {
            font-weight: bolder;
            color: black;
          }
          .madlib {
            font-size: 1.65rem;
            color: #666;
            background-color: #eee;
            line-height: 43px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default App;
