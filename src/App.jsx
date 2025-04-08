import React, { useState } from 'react'

const App = () => {

  let array = ["year 1", "year 2", "year 3", "year 4", "year 5"]; //to help listing
  let gender = "girl" //conditional rendering
  const [x, setx] = useState(0) //for changing state

  const btnClick = () => {
    console.log("Clicked")
    setx(x+1);
    console.log(x);
  }
  return (
    <div>
 {array.map((year)=> {return <p>{year}</p>})}
 {gender === "boy" ? <h2>boy</h2>:<h2>girl</h2>}

 {x}
 <button onClick={(btnClick)}>click me</button>
    </div>
   
  )
}

export default App