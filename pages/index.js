import Head from 'next/head';
import Pluralize from 'react-pluralize';

class App extends React.Component {
  state = {
    drinkPrice: 5,
    drinksQuantity: 1,
    hangoverHours: 0,
    hangoverThreshold: 1,
  };

  setDrinkPrice = event => {
    let { drinkPrice } = this.state;
    drinkPrice = event.target.value;
    this.setState({ drinkPrice });
  };

  setDrinksQuantity = event => {
    let { drinksQuantity, hangoverHours, hangoverThreshold } = this.state;
    drinksQuantity = event.target.value;
    hangoverHours = Number(drinksQuantity) > Number(hangoverThreshold) ? 2 * (drinksQuantity - hangoverThreshold) : 0;
    this.setState({ drinksQuantity, hangoverHours });
  };

  setHangoverThreshold = event => {
    let { drinksQuantity, hangoverHours, hangoverThreshold } = this.state;
    hangoverThreshold = event.target.value;
    hangoverHours = Number(drinksQuantity) > Number(hangoverThreshold) ? 2 * (drinksQuantity - hangoverThreshold) : 0;
    this.setState({ hangoverHours, hangoverThreshold });
  };

  render() {
    const dropdownOptions = [];
    for (let i = 1; i <= 20; i += 1) {
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
      <div>
        <Head>
          <title>hair.dog</title>
          <link rel="icon" type="image/x-icon" href="/static/dog.png" />
          <link rel="stylesheet" href="https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Pacifico|Catamaran:400,600" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(f, a, t, h, o, m){
                a[h]=a[h]||function(){
                    (a[h].q=a[h].q||[]).push(arguments)
                };
                o=f.createElement('script'),
                m=f.getElementsByTagName('script')[0];
                o.async=1; o.src=t; o.id='fathom-script';
                m.parentNode.insertBefore(o,m)
                })(document, window, '//cdn.usefathom.com/tracker.js', 'fathom');
                fathom('set', 'siteId', 'NNERMNMD');
                fathom('trackPageview');
              `,
            }}
          />
        </Head>
        <main>
          <h1>
            hair.dog <img src="/static/dog.png" alt="A dog icon" />
          </h1>
          <div>
            <h2>“I'm never drinking again” Mad Libs</h2>
            <p className="madlib">
              I'm going out for drinks. I'm going to have{' '}
              <Dropdown value={drinksQuantity} setValue={this.setDrinksQuantity} />{' '}
              <Pluralize singular="drink" count={drinksQuantity} showCount={false} />. I usually have a hangover if I
              drink more than <Dropdown value={hangoverThreshold} setValue={this.setHangoverThreshold} />{' '}
              <Pluralize singular="drink" count={hangoverThreshold} showCount={false} />. Drinks cost about
              <Dropdown value={drinkPrice} setValue={this.setDrinkPrice} /> dollars each, so this hangover is going to
              cost me at least{' '}
              <strong>
                ${drinksQuantity * drinkPrice} for the drinks plus {hangoverHours} useless{' '}
                <Pluralize singular="hour" count={hangoverHours} showCount={false} />
              </strong>
              . Worth it?
            </p>
            {/* 
            <ul>
              <li>drinkPrice: {drinkPrice}</li>
              <li>drinksQuantity: {drinksQuantity}</li>
              <li>hangoverHours: {hangoverHours}</li>
              <li>hangoverThreshold: {hangoverThreshold}</li>
            </ul>
           */}
          </div>

          <div>
            <h2>What is this?</h2>
            <p>
              The original idea was to build a hangover calculator that told you, based on your age, gender, race, and
              how/what you were planning to drink, how much suffering you could expect the next day. Unfortunately there
              is very little published research (as in, a couple of studies) about hangovers.
            </p>
            <p>
              So this is just a simple calculator that doesn't do much of anything, apart from perhaps pushing you to
              think ahead about that ninth Jägerbomb.
            </p>
            <p>There are a few assumptions:</p>
            <ol>
              <li>
                If you’re going to have a hangover, it's going to last at least 2 hours. Each additional drink adds 2
                hours to your hangover. There is absolutely no science to back this up.
              </li>
              <li>
                Hangover hours are typically useless. Don't tell me that watching{' '}
                <a
                  href="https://www.youtube.com/watch?v=xJOzCNjVtiE&feature=youtu.be&t=58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Office
                </a>{' '}
                for the fourth time is useful.
              </li>
              <li>
                Each additional drink past your hangover threshold is going to cause the same amount of suffering. In
                practice this isn't true, at least not for me.
              </li>
              <li>You're only buying drinks for yourself.</li>
            </ol>
          </div>
          <div>
            <h2>What does the research say?</h2>
            <p>
              Currently there are only a handful of researchers working on figuring out hangovers, and they haven’t
              really figured out much more than we already know. Here are some facts:
            </p>
            <ul>
              <li>
                About a quarter of people observed in hangover studies don’t experience any hangover symptoms. WTF?
              </li>
              <li>
                It’s generally known what the symptoms of a hangover are, but the causes are not known. Dehydration is a
                symptom, but not the cause.
              </li>
              <li>
                Hangovers begin when your blood alcohol concentration starts to drop (hours after you've stopped
                drinking), and the symptoms peak when BAC is nearing zero.
              </li>
              <li>
                “Hair of the dog”, drinking when you’re hungover, just delays the hangover symptoms. But, the timing of
                your post-drinking drinking may mean you sleep through some of the symptoms.
              </li>
              <li>If your BAC exceeds 0.10, you’ll probably be hungover the next day.</li>
              <li>
                Theories about hangovers include: it’s an inflammatory response; the key is a neurotransmitter called
                GABA (gamma aminobutyric acid);{' '}
                <a href="https://en.wikipedia.org/wiki/Congener_(beverages)" target="_blank" rel="noopener noreferrer">
                  congeners
                </a>
                , which are substances other than alcohol in drinks, have an effect on hangover
              </li>
              <li>Sticking to clear drinks (low in congeners) may reduce or eliminate your hangover.</li>
            </ul>
          </div>

          <div>
            <h2>Hangover Remedies</h2>
            <p>
              Nothing new here. All of the hangover ‘remedies’ address the symptoms of a hangover: coffee (tiredness), a
              greasy breakfast (sugars/carbs replacement), hydration (to counter alcohol’s diuretic effects), and
              Netflix (to ward off the inevitable shame).
            </p>
            <p>
              I’ve found{' '}
              <a
                href="https://www.amazon.com/Nuun-Hydration-Electrolyte-Essential-Electrolytes/dp/B019GU4ILQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuun
              </a>{' '}
              electrolyte tablets to be effective in reducing the symptoms of a hangover—take them before and after you
              drink.{' '}
              <a href="https://www.youtube.com/watch?v=DHQngnnHE_0" target="_blank" rel="noopener noreferrer">
                Placebo
              </a>
              ? Perhaps.
            </p>
          </div>

          <div>
            <h2>Research</h2>
            <ul>
              <li>
                <a
                  href="https://www.scientificamerican.com/article/in-search-of-a-cure-for-the-dreaded-hangover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  In Search of a Cure for the Dreaded Hangover — Scientific American
                </a>
              </li>
              <li>
                <a
                  href="https://www.theatlantic.com/health/archive/2014/06/the-painful-science-of-hangovers/373138"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Painful Science of Hangovers — The Atlantic
                </a>
              </li>
              <li>
                <a href="https://growlermag.com/science-behind-hangovers" target="_blank" rel="noopener noreferrer">
                  The Science Behind Hangovers — The Growler
                </a>
              </li>
              <li>
                <a href="https://www.wired.com/2014/05/hangover-cure" target="_blank" rel="noopener noreferrer">
                  Everything Science Knows About Hangovers-And How To Cure Them — Wired
                </a>
              </li>
              <li>
                <a
                  href="#https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3827719/#!po=58.5714"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Alcohol Hangover Research Group Consensus Statement on Best Practice in Alcohol Hangover Research
                </a>
              </li>
            </ul>
          </div>
        </main>
        <footer>
          <a href="https://github.com/rdyson/hair.dog" target="_blank" rel="noopener noreferrer">
            source
          </a>
        </footer>
        <style jsx>{`
          h1 {
            font-family: 'Pacifico';
            color: #ee6836;
          }
          h2 {
            font-size: 28px;
            font-weight: bold;
            font-family: 'Catamaran';
            color: #777;
            margin-top: 40px;
          }
          a {
            color: darkblue;
          }
          p,
          li,
          footer {
            color: #555;
            font-family: 'Catamaran';
            font-size: 22px;
            line-height: 35px;
          }
          strong {
            font-weight: 900;
            color: black;
          }
          .madlib {
            font-size: 1.65rem;
            color: #222;
            background-color: #fff0ea;
            line-height: 43px;
            padding: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
