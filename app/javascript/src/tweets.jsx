import React from 'react'
import ReactDOM from 'react-dom'

import './tweets.scss';

const Tweets = () => (
  <>
    <h1 className="text-center">Welcome to Twitter</h1>
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Tweets />,
    document.body.appendChild(document.createElement('div')),
  )
})
