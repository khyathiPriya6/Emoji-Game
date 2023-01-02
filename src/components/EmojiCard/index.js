import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-background">
      <button type="submit" className="emoji-btn" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-style" />
      </button>
    </li>
  )
}
export default EmojiCard
