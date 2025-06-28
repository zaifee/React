import React, { useEffect, useState } from 'react'

const UseEffectExam = () => {
    const[cnt, setCount] = useState(0);
    const [something, setSomething] = useState(0);

    useEffect(() => {
        console.log('Use Effect called');
        document.title = `Increment ${cnt}`;
    }, [cnt, something])

  return (
    <div>
        <h1>Cnt: {cnt}</h1>
        <button onClick={() => setCount(cnt+1)}>Inc Cnt</button>
        <button onClick={() => setSomething(cnt+1)}>Inc Something</button>
    </div>
  )
}

export default UseEffectExam