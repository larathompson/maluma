import React, { useState } from 'react'
import FAQ from './FAQ'


const Questions = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'Where are you located',
      answer: 'Giesing, Munich',
      open: true
    },
    {
      question: 'How far do you deliver?',
      answer: 'We deliver Germany wide. If you live outside Germany then no problem, get in touch with us and we can see how we can help',
      open: false
    },
    {
      question: 'Is it possible to help you build our project?',
      answer: 'Yes of course. We are always keen to not only provide you with a great result but also let you get involved in the fun as well',
      open: false
    },
    {
      question: 'Do you use environmentally friendly materials?',
      answer: 'We always try to use 100% environmentally friendly materials where possible.',
      open: false
    },
    {
      question: 'Do you build custom van conversions & tiny houses?',
      answer: 'Yes, with experience building both van conversions and tiny houses, we are ready to bring your ideas to life',
      open: false
    }

  ])

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false
      }
      return faq
    }))
  }

  return (
    <div>
      <h1> FAQ Page </h1>
      <div className='faqs'>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  )
}

export default Questions