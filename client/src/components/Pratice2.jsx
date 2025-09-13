//useEffect is used to perform side effects in our components
//some common side effects 
//fetching data from api
//updating the dom document & window
//timer functions setTimeout and setInterval

import { useEffect, useState } from "react"

//function -side effect logic   ------->what to run
//dependencies - array of varibles ------> when to run
//useEffect(callback,dependencies)

//useLayoutEffect works exactly the same as useEffect(also have the same syntax)

//but only difference is when it run 
//it run before printing all the elements in dom and it is synchoronus in nature(useEffect is asychronous)



export const Pratice2 = () => {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("called")
        document.title=`${count}new messages!!`;
    },[count])

    // useEffect(()=>{
    //    const id= setInterval(()=>{
    //      console.log("hello")
    //     },1000);

    //     return ()=>{
    //     clearInterval(id)
    //     }
    // })

    
  return (
    <div>
   <h3 className="text-2xl p-4">{count} new Messages</h3>
   <button onClick={()=>setCount(count+1)} className="text-2xl p-4 bg-slate-400 m-3">Increase</button>
    </div>
  )
}
