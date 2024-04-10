import React, { useEffect, useRef, useState } from "react";

import Form from "./Form";
function Hello() {
  let obj=  { name:"name8",
          
       category:"mobile"}

  let [data1, setData] = useState([]);
  console.log(data1);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await fetch("http://localhost:4400/products");
    let data = await res.json();
    setData(data);
  };
  const deleteData = async (req) => {
    console.log(req)
    
    let res = await fetch("http://localhost:4400/products/4",{
      method:"DELETE"
    });
    getData()
    
  };
  let postData = async () => {
    console.log("clicked")
    let res = await fetch("http://localhost:4400/products",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(obj)
    });
    getData()

  
    
    
  };
  let updateData = async () => {
    console.log("clicked")
    try{
      console.log("try block 1")

      let res = await fetch("http://localhost:4400/products/4",{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(obj)
        }); 
        getData()
        console.log("try block 2")

    }catch{
      console.log("error")
    }
        
  };

  return (
    <>
    <Form></Form>
      
      <div className="container pt-5">
      <button onClick={postData} className="btn btn-primary m-2">Add Data</button>
      
      <table className="table table-dark">
       
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Catogery</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {data1.map((e) => {
            
            return(<tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{(e.price)? e.price:"-"}</td>
              <td>{e.category}</td>
              <td>
                <button onClick={updateData} className="btn btn-success">update</button>
                <button onClick={deleteData} className="btn btn-danger">delete</button>
              </td>
              
            </tr>)
            
            
          })}
          </tbody>
      </table>

      </div>
      
    </>
  );
}

export default Hello;
