import React from "react";
import TextField from '@mui/material/TextField';
const create=()=>{
    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12 shadow-lg">
                   <TextField
                       required
                       id="outlined-required"
                       label="organization name"
                       className="form-control"
                       /> 
                </div>
            </div>
        </div>
        </>
    )
}
export default create;