import "./Home.css";
import  { useState, useEffect } from "react";
import React from "react";

export const Home = () => {
    const [data,setData] = useState([]);
    const getData = () => {
        fetch(`https://fast-reef-22226.herokuapp.com/data`).then((res) => {
            res.json().then((data) =>{
                setData([data]);
            })
        })
    }
    console.log(data);

    return (
        <div>
            <img  style={{width:"350px"}} src="data:image/png;base64,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"/>
            <br />
            <input type="text" placeholder="Search here" className="search-box"/>
            <button id="btn" onClick={() => {getData()}}>Search</button>
            {data.length == 1 ? <p style={{border: "5px solid lightgray",width:"400px",height:"500px", color:"red", margin:"auto"}}>{data.data}</p> : " "}
            {/* <p style={{border: "5px solid lightgray",width:"400px",height:"500px", color:"red"}}>{data.author}</p> */}
        </div>
    );
};
