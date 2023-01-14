
import React from 'react'
import './TestItem.css'

function TestItem({item,index}) {
  return (
    <div className="test-item">
        <div>
            <p>content: {item.content}</p>
            <p>index: {index}</p>
        </div>
    </div>
  )
}

export default TestItem