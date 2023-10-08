import { useParams } from "react-router-dom";
import { useFetchRoom, useUpdateRoom } from "../hooks/RoomHooks";
import ApiStatus from "../ApiStatus";
import React from "react";
import RoomForm from "./RoomForm";

const RoomEdit = () => {
    const { id } = useParams();
    if (!id) throw Error("Need a room ID");
    const { data, status, isSuccess } = useFetchRoom(id);
    const updateCustomerMutation = useUpdateRoom(id);

    if (!isSuccess) return <ApiStatus status={status} />

    return (
        <RoomForm 
            room={data}
            submitted={c => updateCustomerMutation.mutate(c)}
            />
    );
};
export default RoomEdit;