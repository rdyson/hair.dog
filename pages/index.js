import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const wrapperStyle = { width: 400, margin: 50 };

class App extends React.Component {
  state = {
    drinks: 0,
    timeValue: 0
  };

  addDrink = () => {
    let drinks = this.state.drinks
    drinks = drinks + 1;
    this.setState({drinks})
  }

  removeDrink = () => {
    let drinks = this.state.drinks
    drinks = drinks - 1;
    this.setState({drinks})
  }

  setTimeValue(event) {
    let timeValue = this.state.timeValue
    console.log(event.target.value)
    timeValue = event.target.value
    this.setState({timeValue})
  }

  render() {
    return (
      <Layout>
        <h1>hair.dog</h1>
        <p>
          How many drinks? {this.state.drinks}
          <button onClick={this.addDrink}>+</button>
          <button onClick={this.removeDrink}>-</button>
        </p>
        <p>
          What's your time worth in dollars?
          <input onChange={event => this.setTimeValue(event)} />
        </p>
        <p>
          It's going to take you {this.state.drinks * 2} hours to recover tomorrow, which is worth ${this.state.timeValue * 2 * this.state.drinks}.
        </p>
        <p>
          <ul>
            <li>drinks: {this.state.drinks}</li>
            <li>timeValue: {this.state.timeValue}</li>
          </ul>
        </p>
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    );
  }
}

export default App;
  