import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Page1 = (req) => {
    let query=useLocation(req)
    let param=new URLSearchParams(query.search)
    
    let params=param.get("num1")
    console.log(params)
       
    let {id,id2}=useParams(req)
    
    console.log((useParams()))
  return (
    <>
    <div>Page1</div>
    <h1>{id}</h1>
    <h2>{id2}</h2>
    </>
    
  )
}

export default Page1