import { useState } from "react";
import { Room } from "../types/room"
import React from "react";

type Args = {
    room: Room;
    submitted: (room: Room) => void;
}

const RoomForm = ({ room, submitted }: Args) => {
    const [roomState, setRoomState] = useState({ ...room });

    const onSubmit:React.MouseEventHandler<HTMLButtonElement>=
        async (e)=>{
            e.preventDefault();
            submitted(roomState);
        }
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="roomType">Room Type</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Room type"
                    value={roomState.roomType}
                    onChange={(e) =>
                        setRoomState({ ...roomState, roomType: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="roomNumber">Room Number</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Room Number"
                    value={roomState.roomNumber}
                    onChange={(e) =>
                        setRoomState({ ...roomState, roomNumber: parseInt(e.target.value) })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="capacity">Capacity</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Capacity"
                    value={roomState.capacity}
                    onChange={(e) =>
                        setRoomState({ ...roomState, capacity: parseInt(e.target.value) })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="isAvailable">Availability</label>
                <input
        type="checkbox" // Change the input type to "checkbox" for a boolean value
        className="form-control"
        checked={roomState.IsAvailable} // Use "checked" to control the checkbox state
        onChange={(e) =>
            setRoomState({ ...roomState, IsAvailable: e.target.checked })
        }
    />
            </div>

            <button
                className="btn btn-primary mt-2"
                disabled={!roomState.roomNumber || !roomState.roomType || !roomState.capacity || !roomState.IsAvailable}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
}

export default RoomForm;