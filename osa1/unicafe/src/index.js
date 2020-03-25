import ReactDOM from 'react-dom'
import React, {useState} from 'react'

//Buttonien määrittely
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = props => <tr>{props.text + props.value}</tr>

/*Tilastojen näyttäminen:
Yhteenlaskettu palautteiden määrä (good, neutral, bad)
Palautteiden keskiarvo (hyvä=1, neutraali=0, huono=-1)
Monta prosenttia palautteista on positiivisia */

const Statistics = ({good, neutral, bad}) => { 
  const all = good + neutral + bad
  const average = (good + bad * -1) / all
  const positive = (good / all * 100.0)

  if(all === 0){
    return(
      <div>No feedback given</div>
    )
  }

  return(
    <table>
      <td>
      <StatisticLine text="good " value = {good} />
      <StatisticLine text="neutral " value = {neutral} />
      <StatisticLine text="bad " value = {bad} />
      <StatisticLine text="all " value = {all} />
      <StatisticLine text="average " value = {average} />
      <StatisticLine text="positive " value = {positive + '%'} />
      </td>
    </table>
  ) 
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
<App />, 
  document.getElementById('root')
)
