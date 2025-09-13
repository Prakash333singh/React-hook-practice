import React, { useReducer } from 'react'
//useContext hook is used to manage global data in react application
//global state , services , themes ,user settings
//create context requires 3 simple steps
//creating the context export const LoginContext =createContext();
//providing the context
//consuming the context  //useContext hook

// const LoginContext = createContext();
// <login.Provider value={true}>
//</loginConext.Provider>
// const login =useContext(loginContext)

const inititalState={count:0}

const reducer=(state,action)=>{
    switch(action.type){
        case "increase":
            return {count:state.count +1};
        case "decrease":
            return {count :state.count -1};

        default:
            return state;
    }

}
export const UseContext = () => {
    const [state,dispatch]=useReducer(reducer,inititalState);
    
    const increaseCount=()=>{
        dispatch({ type: "increase" });
    };
    const decreaseCount = () => {
        dispatch({ type: "decrease" });
    };
  return (
      <div>
         <h2>Count:{state.count}</h2>
         <button onClick={increaseCount}>Increase</button>
         <button onClick={decreaseCount}>decrease</button>
         </div>
  )
}



//userReducer is used to manage complex state in our react appli.
//in other words , useReducer work like a state management tool