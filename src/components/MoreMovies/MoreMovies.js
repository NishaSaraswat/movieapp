import React,{useState} from 'react'
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'

export const MoreMovies = ({setTotalItems}) => {

    const[arrowUp,setArrowDown] = useState(true)

    const showMoreMovies =()=>{
        setArrowDown(!arrowUp)
       setTotalItems(previousValue => previousValue+15)

    }
    const hideMovies=()=>{
       setTotalItems(3)
       setArrowDown(!arrowUp)
    }
  return (
    <div>{
        arrowUp?<FaAngleDown style={{fontSize:20,position:'relative',marginLeft:50,marginRight:40}}
        onClick={showMoreMovies}/>: <FaAngleUp  style={{fontSize:20,position:'relative',marginLeft:50,marginRight:40}}
        onClick={hideMovies}/>
    }</div>
  )
}
