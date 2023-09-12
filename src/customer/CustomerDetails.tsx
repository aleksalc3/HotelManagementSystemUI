import React from "react";
import { useParams } from "react-router-dom";
import { useFetchCustomer } from "../hooks/CustomerHooks";
import ApiStatus from "../ApiStatus";

const CustomerDetails = ()=>{
    const{id}=useParams();
    if(!id)throw Error("Customer id not found");
    const customerId=parseInt(id);

    const{data,status,isSuccess}= useFetchCustomer(customerId);
    if(!isSuccess)return <ApiStatus status={status}/>
    if(!data)return <div>Customer not found</div>

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src="https://www.careplus.ie/assets/no-image-6d18ebb6d0fae4810217270fa18bb583862de56207f2921dcc474d7bba4a1098.jpg" alt="No Photo" />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h1 className="col-12">{data.name}</h1>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.email}</h3>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.phone}</h3>
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">{data.address}</h2>
                </div>
            </div>
        </div>
    );
}
export default CustomerDetails;