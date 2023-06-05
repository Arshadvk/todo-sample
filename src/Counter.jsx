import React from 'react'

function Counter(props) {
  const {count , title} = props 
  return (
    <div>
         <h1>{title} {count}</h1>
    </div>
  )
}

export default Counter
