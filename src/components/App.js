
import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { getData } from "../redux/actions/apiActions.js";

const App = () => {
  let dispatch=useDispatch()
  let x= useSelector((data)=>data)
  console.log(x)
  useEffect(()=>{
    setTimeout(()=>{
      dispatch(getData())
    },3000)
  },[])
  return (
    <div>
       <h1>A short Naration of Lorem Ipsum</h1>
       <h4>{'Below Contains A title and Body gotten from a random API, Please take your time to Review' }</h4>
       <ul>
        {x.succ ? x.succ.map(element=>{
        return (<li>Title :Loading tiltes</li>)
       }) : <li><div className="title">Title :{element.title}</div><div className="body">Body :{element.body}</div></li>}
       </ul>
    </div>
  )
}

export default App