import React, { useEffect, useState } from "react";
import axios from "axios";
import Buffer from 'Buffer';

export default function ShowImg() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getImg")
      .then((res) => {
        setVal(res.data);
      })
      .catch((err) => console.log(err));
  });

  return <>
    {
        val.map((fil)=>{
            const base64String = btoa(String.fromCharCode(...new Uint8Array(fil.missPerImg.data.data)));
            // const base64String = Buffer.from(new Uint8Array(fil.missPerImg.data.data)).toString('base64')
            return <img src={`data:missPerImg/png/jpeg/jpg; base64,${base64String}`} width="300" height={300} alt="img" key={fil._id}/>
        })
    }
  
  </>;
}
