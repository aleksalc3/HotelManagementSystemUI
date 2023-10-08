import React from "react";
import { useAddRoom } from "../hooks/RoomHooks";
import { Room } from "../types/room";
import RoomForm from "./RoomForm";

const RoomAdd = () => {
    const addCustomerMutation = useAddRoom();

    const room: Room = {
        roomType: "",
        roomNumber: 0,
        capacity: 0,
        IsAvailable: true,
        id: "0"
    };
    return (
        <RoomForm
            room={room}
            submitted={(c) => addCustomerMutation.mutate(c)}
        />
    );
}
export default RoomAdd;