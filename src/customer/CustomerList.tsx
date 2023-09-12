import React from "react";
import useFetchCustomers from "../hooks/CustomerHooks";
import ApiStatus from "../ApiStatus";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomerList =()=>{
    const nav=useNavigate();
    const {data, status, isSuccess}=useFetchCustomers();

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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data&& data.length? data.map((c) =>(
                        <tr key={c.id} onClick={()=> nav(`/customer/${c.id}`)}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>{c.address}</td>
                        </tr>
                    )):<p>No Customer found</p>}
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/customer/add">
                Add
            </Link>
        </div>
    );
}

export default CustomerList;