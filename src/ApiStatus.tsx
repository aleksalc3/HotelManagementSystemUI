import React from "react";

type Args={
    status:"idle"|"success"|"error"|"loading"
};

const ApiStatus= ({status}:Args)=>{
    switch(status){
        case "error":
            return <div>INTERNAL SERVER ERROR 500 - Error communicating with the data backend</div>
        case "idle":
            return <div>Idle</div>
        case "loading":
            return <div>Loading...</div>
        default:
            throw Error("Unkown API state");   
    };
};
export default ApiStatus;