import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const handlePlusOne = function () {
    setCount(() => count + 1)
  }

  const handleMinusOne = function () {
    setCount(() => count - 1)
  }

  const handleReset = function () {
    setCount(() => 0)
  } 
  return (
    <header>
        <div className="mt-4 text-center">
          <div className="row">
            <h2 className="col-12">Count: {count}</h2>
          </div>
          <div className="d-flex justify-content-evenly mt-5">
            <button onClick={handlePlusOne}  className="button scaler col-3"> +1 </button>
            <button onClick={handleReset}  className="button btn scaler col-3"> Reset </button>
            <button onClick={handleMinusOne}  className="button btn scaler col-3"> -1 </button>
          </div>
        </div>
    </header>
  )
}

export default Counter