import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDeleteRoom, useFetchRoom } from "../hooks/RoomHooks";
import ApiStatus from "../ApiStatus";

const RoomDetails = () => {
    const { id } = useParams();
    if (!id) throw Error("Room id not found");
    const roomId = parseInt(id);
    console.log("outside promptttttttttt   "+roomId);
    const { data, status, isSuccess } = useFetchRoom(id);
    const deleteCustomerMutation = useDeleteRoom(roomId);

    if (!isSuccess) return <ApiStatus status={status} />
    if (!data) return <div>Room not found</div>

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src="https://www.careplus.ie/assets/no-image-6d18ebb6d0fae4810217270fa18bb583862de56207f2921dcc474d7bba4a1098.jpg" alt="No Photo" />
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <Link
                            className="btn btn-primary w-100"
                            to={`/customer/edit/${data.id}`}
                        >
                            Edit
                        </Link>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-danger w-100"
                            onClick={() => {
                                if (window.confirm("Are you sure?"))
                                    deleteCustomerMutation.mutate(data);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h1 className="col-12">{data.roomType}</h1>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.roomNumber}</h3>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.capacity}</h3>
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">{data.IsAvailable}</h2>
                </div>
            </div>
        </div>
    );
}
export default RoomDetails;