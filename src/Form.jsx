import React from "react";

function FormData() {
  return (
    <>
      <div style={{display:"flex"}} className="">
        <form style={{display:"flex",flexDirection:"row"}}>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="price" />
          <input type="text" placeholder="category" />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </>
  );
}

export default FormData;
