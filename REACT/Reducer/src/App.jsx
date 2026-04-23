import React from 'react'
import Test from './Components/Test'
import Products from './Components/Products'
import FetchedData from './Components/FetchedData'

const App = () => {
  return (
    <>
      <Test/>
      <hr />
      <Products/>
      <hr />
      <FetchedData/>
    </>
  )
}

export default App






































































// import React, { useReducer } from 'react'


// const App = () => {

//   function reducer (state,action) {
//     switch(action.type){
//       case "INCREMENT": return {
//         ...state,
//         count:state.count+1
//       }
//       case "DECREMENT": return {
//         ...state,
//         count:state.count-1
//       }
//       case "CHANGENAME": return {
//         ...state,
//         name:action.payload
//       }
//     }
//   }

//   const [current_state,dispatch] = useReducer(reducer,{
//     count:0,
//     name:"Nick"
//   })

//   return (
//     <>
//       <h1>{current_state.count}</h1>
//       <h2>{current_state.name}</h2>
//       <button onClick={()=>dispatch({
//         type:"INCREMENT"
//       })} >Increment</button>
//       <button onClick={()=>dispatch({
//         type:"DECREMENT"
//       })} >Decrement</button>
//       <button onClick={()=>dispatch({
//         type:"CHANGENAME",
//         payload:"Chota Bheem"
//       })} >Change Name</button>
//     </>
//   )
// }

// export default App

