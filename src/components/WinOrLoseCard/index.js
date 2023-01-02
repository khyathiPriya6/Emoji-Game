// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {win, score, resetGame} = props
  const imgUrl = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgain = () => {
    resetGame()
  }

  console.log(score)
  return (
    <div className="win-or-lose-container">
      <div className="text-container">
        <h1 className="heading-style">{win ? 'You Won' : 'You Lose'}</h1>
        <p className="heading-style">{win ? 'Best Score' : 'Your Score'}</p>
        <p className="score-style">{score}/12</p>
        <button className="btn-style" type="submit" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} className="img-style" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
