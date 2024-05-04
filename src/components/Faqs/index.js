import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-lists">
          {faqsList.map(eachFaqItem => (
            <FaqItem key={eachFaqItem.id} faqDetails={eachFaqItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
