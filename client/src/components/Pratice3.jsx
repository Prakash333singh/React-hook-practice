//useMemo hook is used to apply Memoization in react 
//Memoization is a technique for improving the performance of code
//it is useful to avoid expensive calculations on every render when the returned vale is not change
//it is same as useffect and also syntax is same the only difference we can't return any value from it and store it to variable
//const memoCalcultion = useMemo(callback,[dependancy])
//we perform all side effect in useEffect hook
//all expensive functions ,calculation in useMemo hook.

import React, { useMemo, useState } from 'react'

const Pratice3 = () => {
    const [count,setCount]=useState(0);
    const [dark,setDark]=useState(false);


    //expensive cal
    const double = useMemo(()=>{
        console.log("calculating.....")
        return count * 2;
    },[count]) //only re-run when count changes


    return (
        <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
            <h1>Count: {count}</h1>
            <p>Double: {double}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    )
}

export default Pratice3