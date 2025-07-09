import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementBy, decrement } from './store/slices/counter'

function App() {
  const count = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

      </div>
      <h1>count is {count}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(incrementBy(5))}>
          IncrementBy
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

      </div>
    </>
  )
}

export default App
