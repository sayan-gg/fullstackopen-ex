import { useState } from 'react'


const H1 = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value, isPercent=false}) => {
  if (isPercent) {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ( {goodCount, neutralCount, badCount, totalCount} ) => {

  if (totalCount === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const roundToTwo = (number) => {
    return Math.round(number * 100)/100 || 0
  }
  const avg = roundToTwo((goodCount*1 + neutralCount*0 + badCount*-1)/(totalCount))
  const positive_feedback = roundToTwo((goodCount/(totalCount)) * 100)
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={goodCount} />
          <StatisticLine text={'neutral'} value={neutralCount} />
          <StatisticLine text={'bad'} value={badCount} />
          <StatisticLine text={'all'} value={totalCount} />
          <StatisticLine text={'average'} value={avg} />
          <StatisticLine text={'positive feedback'} value={positive_feedback} isPercent={true} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  console.log('hello world')

  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)
  const [totalCount, setTotal] = useState(0)

  const handleGood = () => {
    setGoodCount(goodCount + 1)
    setTotal(totalCount + 1)
  }
  const handleNeutral = () => {
    setNeutralCount(neutralCount + 1)
    setTotal(totalCount + 1)
  }

  const handleBad = () => {
    setBadCount(badCount + 1)
    setTotal(totalCount + 1)
  }

  return (
    <div>
      <H1 text='give feedback' />
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <H1 text='statistics' />
      <Statistics goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} totalCount={totalCount} />
    </div>
  )
}


export default App
