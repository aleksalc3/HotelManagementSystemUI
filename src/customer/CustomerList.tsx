import React from "react";
import useFetchCustomers from "../hooks/CustomerHooks";
import ApiStatus from "../ApiStatus";

const CustomerList =()=>{
    const {data, status, isSuccess}=useFetchCustomers();

    if(!isSuccess)
        return <ApiStatus status={status}/>
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
                    {data&&data.map((c)=>(
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>{c.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;