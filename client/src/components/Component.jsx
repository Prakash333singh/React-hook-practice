import { useState,useRef} from 'react'
//hooks are the functions to use some react features in functional components

//in other word ,hooks are functions that make functional components work like class components

//useState
// useState hook is a function to add state in functional component
// what is state
// state is nothing but just values or variables of ur component
 
// In plain JavaScript(or even React without hooks), if you declare a variable inside a component, it won’t re - render the UI when that variable changes.

// Problem: The number in the UI never updates, even though the variable changes, because React doesn’t know about it.

// Why do we need useState ?

//Dynamic UI → Without it, your UI is static and won’t update when data changes.

//Re - rendering → useState tells React when to re - render a component.

//Component memory → The value stored in state is remembered across re - renders.

//Interactivity → Any feature like counters, forms, toggles, fetching data, etc.relies on state.

// useRef is a React hook that lets you store a mutable value that:
// Persists across renders(like state),
// Does not trigger a re - render when it changes.


// useState → re - renders the component whenever value changes.
// useRef → value changes silently, without re - rendering.

//Common Uses of useRef
//Accessing Dom Elements
//storing values b/w renders(without causing re-render)

// Storing setInterval or setTimeout IDs
// When you start an interval(setInterval), you get back an ID number.
// To stop it, you need that exact ID in clearInterval(id).
// If we put that ID in state, React would re - render unnecessarily.
// If we just use a normal variable, it resets every render and we lose the ID.

// 👉 useRef is the perfect solution: it remembers the interval ID across renders but doesn’t cause re - renders.

const Component = () => {

   const [count , setCount] = useState(0);
   const [name, SetName] = useState("")
   const intervalRef = useRef(null);

    const increaseCount =()=>{
        if(intervalRef.current)return;//prevent multiple intervals

       intervalRef.current = setInterval(()=>{
            setCount((count) => count+ 1)
        },1000)  
    };
    

    const stopCount=()=>{
       clearInterval(intervalRef.current);
       intervalRef.current=null;//reset ref 
    }


    const resetCount=()=>{
        clearInterval(intervalRef.current);
        intervalRef.current = null;//reset ref 
        setCount(0);
    }



  return (
      <div className='flex justify-center items-center h-96 gap-4 '>
    <button className='text-lg bg-slate-400 p-4' onClick={increaseCount}>start</button>
        <h1 className='text-2xl text-black' >count : {count} </h1>
          <button className='text-lg bg-slate-400 p-4' onClick={stopCount} >stop</button>
          <button className='text-lg bg-slate-400 p-4' onClick={resetCount}>Reset</button>

          {/* <input type='text' className='bg-slate-300' onChange={(e)=>SetName(e.target.value)}/>
          <h1>{name} !!!!!!!!!</h1> */}
    </div>
  )
}

export default Component