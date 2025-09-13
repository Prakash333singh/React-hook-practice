//useCallback is used to return Memoize function
// it also useful for preventing functions from being re-created on rendering
//it is same as useMemo but the only difference is useMemo returns memoized value and useCallback returns memoized function
//syntax: const memoizedCallback = useCallback(callback,[dependancy])

import React from 'react'

const pratice4 = () => {
  return (
    <div>pratice4</div>
  )
}

export default pratice4