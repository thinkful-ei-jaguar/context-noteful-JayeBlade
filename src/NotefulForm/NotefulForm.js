import React, { Component } from 'react'
import './NotefulForm.css'
import NotefulContext from '../Not'

export default class NotefulForm extends Component {
  
  static contextType = NotefulContext;  
  const { className, ...otherProps } = this.context
  
  render () {
    return (
      <form
        className={['Noteful-form', className].join(' ')}
        action='#'
        {...otherProps}
      />
    )
  }
}
