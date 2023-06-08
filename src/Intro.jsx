/* eslint-disable no-unused-vars */
import React from "react";

export default function Intro(props){
  return(
    <div className="h-screen bg-blue-400 text-white grid grid-flow-row place-items-center p-44">
      <h1 className="font-light text-5xl text-center">Welcome to Quizzical!</h1>
      <p className="text-center text-xl">You will be give 5 questions.</p>
      <button type="button" className="bg-black py-2 px-4 rounded-md hover:text-black hover:bg-white" onClick={props.changeLayout}>Start</button>
    </div>
  )
}