import {Component} from 'react'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import WinOrLoseCard from '../WinOrLoseCard/index'

import './index.css'

/* 
Quick Tip 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

// Write your code here.

class EmojiGame extends Component {
  state = {finishedEmojisIdList: [], topScore: 0, gameFinish: false}

  finishGame = () => {
    const {finishedEmojisIdList, topScore} = this.state
    if (topScore < finishedEmojisIdList.length) {
      this.setState({topScore: finishedEmojisIdList.length, gameFinish: true})
    } else {
      this.setState({gameFinish: true})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({finishedEmojisIdList: [], gameFinish: false})
  }

  displayEmojiCard = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="emojis-container">
        {shuffledList.map(eachItem => (
          <EmojiCard
            emojiDetails={eachItem}
            onClickEmoji={this.onClickEmoji}
            key={eachItem.id}
          />
        ))}
      </ul>
    )
  }

  displayCard = () => {
    const {emojisList} = this.props
    let win
    const {finishedEmojisIdList} = this.state
    if (finishedEmojisIdList.length === emojisList.length) {
      win = true
    } else {
      win = false
    }
    const score = finishedEmojisIdList.length

    return <WinOrLoseCard win={win} resetGame={this.resetGame} score={score} />
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {finishedEmojisIdList} = this.state
    const isEmojiPresent = finishedEmojisIdList.includes(id)
    const clickedEmoji = emojisList.find(eachItem => eachItem.id === id)
    if (isEmojiPresent) {
      this.finishGame()
    } else if (emojisList.length - 1 === finishedEmojisIdList.length) {
      this.setState({finishedEmojisIdList: emojisList})
      this.finishGame()
    } else {
      this.setState(prevState => ({
        finishedEmojisIdList: [
          ...prevState.finishedEmojisIdList,
          clickedEmoji.id,
        ],
      }))
      console.log(finishedEmojisIdList)
    }
  }

  render() {
    const {topScore, finishedEmojisIdList, gameFinish} = this.state

    return (
      <div className="emoji-app-container">
        <NavBar
          topScore={topScore}
          finishedEmojisIdList={finishedEmojisIdList}
          gameFinish={gameFinish}
        />
        {gameFinish ? this.displayCard() : this.displayEmojiCard()}
      </div>
    )
  }
}
export default EmojiGame
