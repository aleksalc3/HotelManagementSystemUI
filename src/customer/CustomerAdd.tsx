import React from "react";
import { useAddCustomer } from "../hooks/CustomerHooks";
import { Customer } from "../types/customer";
import CustomerForm from "./CustomerForm";

const CustomerAdd = () => {
    const addCustomerMutation = useAddCustomer();

    const customer: Customer = {
        name: "",
        email: "",
        phone: "",
        address: "",
        id: "0"
    };
    return (
        <CustomerForm
            customer={customer}
            submitted={(c) => addCustomerMutation.mutate(c)}
        />
    );
}
export default CustomerAdd;