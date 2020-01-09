import React, { Component } from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NotefulContext from '../NotefulContext'

export default class NotePageMain extends Component {

  static contextType = NotefulContext;

  render () {
    return (
      <section className='NotePageMain'>
        <Note
          id={this.context.note.id}
          name={this.context.note.name}
          modified={this.context.note.modified}
        />
        <div className='NotePageMain__content'>
          {this.context.note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
}
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
