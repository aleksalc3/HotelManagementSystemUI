import { useState } from "react";
import { Customer } from "../types/customer"
import React from "react";

type Args = {
    customer: Customer;
    submitted: (customer: Customer) => void;
}

const CustomerForm = ({ customer, submitted }: Args) => {
    const [customerState, setCustomerState] = useState({ ...customer });

    const onSubmit:React.MouseEventHandler<HTMLButtonElement>=
        async (e)=>{
            e.preventDefault();
            submitted(customerState);
        }
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={customerState.name}
                    onChange={(e) =>
                        setCustomerState({ ...customerState, name: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={customerState.email}
                    onChange={(e) =>
                        setCustomerState({ ...customerState, email: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    value={customerState.phone}
                    onChange={(e) =>
                        setCustomerState({ ...customerState, phone: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={customerState.address}
                    onChange={(e) =>
                        setCustomerState({ ...customerState, address: e.target.value })
                    }
                />
            </div>

            <button
                className="btn btn-primary mt-2"
                disabled={!customerState.address || !customerState.name || !customerState.email || !customerState.phone}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
}

export default CustomerForm;