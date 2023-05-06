import React,{useState,useEffect} from "react";
import "../index.scss";
import  dummy from "../data/data.json"
import axios from "axios"
const AllRecepies = () => {
  const [data,setData]=useState([])
  const [update,setUpdate] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/recipes').then(res=>{
        setData(res.data)
        }
        ).catch(err=>{
            console.log(err);
        })
    },[update])
 
 
   const del =(id)=>{
      axios.delete(`http://localhost:4000/recipes/${id}`)
      .then((result)=>{console.log(result);
      setUpdate(!update)
      }).catch((err)=>{console.log(err)})
  }


  return (
    <div className="card-container">{
      data.map((e,i)=>
    (
      <div className="card" key={i}>
        <button className="delete" onClick={()=>{
          del(e.recepie_Id)
        }}>delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
              className="img"
              src={e.recepie_Image}
              alt="food"
            />
          </div>
          <div className="text">
            <h1 className="food">{e.recepie_Name}</h1>
            <i> {e.Prep_Time+e.Cook_Time} Min</i> <br />
            <i> Serves: {e.Serves} </i>
          </div>
        </>
      </div>))
      }
      
   
     
      
    
  
    </div>
  );
};

export default AllRecepies;
