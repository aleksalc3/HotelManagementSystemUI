import { useParams } from "react-router-dom";
import { useFetchCustomer, useUpdateCustomer } from "../hooks/CustomerHooks";
import ApiStatus from "../ApiStatus";
import React from "react";
import CustomerForm from "./CustomerForm";

const CustomerEdit = () => {
    const { id } = useParams();
    if (!id) throw Error("Need a customer ID");
    //const customerId = parseInt(id);
    console.log(id);
    const { data, status, isSuccess } = useFetchCustomer(id);
    const updateCustomerMutation = useUpdateCustomer(id);

    if (!isSuccess) return <ApiStatus status={status} />

    return (
        <CustomerForm 
            customer={data}
            submitted={c => updateCustomerMutation.mutate(c)}
            />
    );
};
export default CustomerEdit;