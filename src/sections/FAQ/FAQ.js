import React from 'react'

import { accordionData } from '../Content/Content'

import Drop from '../Drop/Drop';

import './FAQ.styles.scss'

function FAQ() {
  return (
    <div className='questions'>
        <div className='title'>
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Drop key={title} title={title} content={content} />
        ))}
        </div>

        
    </div>
  )
}

export default FAQ
