import React from "react";
import ApiStatus from "../ApiStatus";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetchRooms from "../hooks/RoomHooks";

const RoomList =()=>{
    const nav=useNavigate();
    const {data, status, isSuccess}=useFetchRooms();

    if(!isSuccess)
        return <ApiStatus status={status}></ApiStatus>
    return(
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center"></h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr> 
                        <th>Room Type</th>
                        <th>Room Number</th>
                        <th>Capacity</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {data&& data.length? data.map((c) =>(
                        <tr key={c.id} onClick={()=> nav(`/room/${c.id}`)}>
                            <td>{c.roomType}</td>
                            <td>{c.roomNumber}</td>
                            <td>{c.capacity}</td>
                            <td>{c.IsAvailable}</td>
                        </tr>
                    )):<p>No Room found</p>}
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/room/add">
                Add
            </Link>
        </div>
    );
}

export default RoomList;