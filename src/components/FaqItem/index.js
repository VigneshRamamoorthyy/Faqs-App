import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isShow: false,
  }

  onToggleShow = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isShow} = this.state

    if (isShow) {
      return (
        <div>
          <hr className="line-break" />
          <p className="faq-answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderButton = () => {
    const {isShow} = this.state

    const btnImg = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const btnAlt = isShow ? 'minus' : 'plus'
    return (
      <button className="show-btn" type="button" onClick={this.onToggleShow}>
        <img src={btnImg} className="show-img" alt={btnAlt} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faqs-list">
        <div className="faq-question-container">
          <h1 className="faq-question">{questionText}</h1>
          {this.renderButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
