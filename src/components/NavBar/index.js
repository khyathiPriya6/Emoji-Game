// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, finishedEmojisIdList, gameFinish} = props
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo-style"
            alt="emoji logo"
          />
          <h1 className="each-score-para">Emoji Game</h1>
        </div>
        {!gameFinish && (
          <div className="score-container">
            <p className="each-score-para">
              Score: {finishedEmojisIdList.length}
            </p>
            <p className="each-score-para">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
