/* eslint-disable no-unused-vars */
import React from 'react'
import Intro from "./Intro.jsx"

function App() {
  const [intro, setIntro] = React.useState(true)
  
  function changeLayout(){
    setIntro(prevPage=>!prevPage);
  }

  return (
    < Intro changeLayout={changeLayout}/>
  )
}

export default App
