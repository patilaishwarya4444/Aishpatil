import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Create from "./create";
import info, { getting } from './Dataacess'
import Read from "./Read";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import Edit from "./Edit";



const List=()=>{
    const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [eview,setEview]=useState(false)
    const [pos,setPos]=useState(0)
    const [obj,setObj]=useState(
        {
            "org":"",
            "locations":"",
            "employees":0,
            "basic":0.0,
            "services":"",
            "benchmarks":""
        }
    )

    const callcreate=()=>{
        setCview(true)
    }
    return(
        <>
            {(cview)?
            <>
                <Create/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setCview(false)}>
                    Back
                </button>
            </>
            :
            (rview)?
            <>
                <Read corp={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
            </>
            :
            (eview)?
            <>
                <Edit corp={obj} order={pos}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setEview(false)}>
                    Back
                </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={callcreate}>
                create
            </button>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-info">
                        <thead>
                            <tr>
                                <th>Name of the Corporate</th>
                                <th>Locations</th>
                                <th>Number of employees</th>
                                <th>Basic salary</th>
                                <th>Services</th>
                                <th>Benchmark's</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((data,index)=>(
                                <tr>
                                    <td onClick={
                                        ()=>{
                                            setRview(true)
                                            const tmp=getting(data.org)
                                            setObj(tmp)
                                        }}>
                                        {data.org}
                                    </td>
                                    <td>{data.locations}</td>
                                    {/* <td>
                                        {data.locations.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td> */}
                                    <td>{data.employees}</td>
                                    <td>{data.basic}</td>
                                    <td>{data.services}</td>
                                    <td>{data.benchmarks}</td>
                                    <td>
                                        <button className="btn btn-outline-danger">
                                            <RemoveCircleIcon/>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-warning"onClick={
                                            ()=>{
                                                setEview(true)
                                                const tmp=getting(data.org)
                                                setPos(index)
                                                setObj(tmp)
                                            }
                                        }>
                                            <EditIcon/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default List;