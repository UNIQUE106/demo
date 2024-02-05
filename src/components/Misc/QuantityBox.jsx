import { useState } from 'react'

function QuantityBox({ direction }) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1)
    }
    function decrement() {
        if(count > 0) setCount(count => count - 1)
    }
  return (
    <div className={`flex flex-${direction} items-center bg-gray-700 rounded-md`}>
        <button onClick={decrement} className='px-2 py-0 text-2xl font-extrabold text-white bg-gray-700 rounded-md'>-</button>
        <p className='text-2xl text-white m-0 p-0'>{count}</p>
        <button onClick={increment} className='px-2 py-0 text-2xl font-extrabold text-white bg-gray-700 rounded-md'>+</button>
    </div>
  )
}

export default QuantityBox