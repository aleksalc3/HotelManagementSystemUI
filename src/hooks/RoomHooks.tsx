import config from "../config";
import { Room } from "../types/room";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
const getToken = () => {
    return localStorage.getItem('jwtToken');
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
const useFetchRooms = () => {
    return useQuery<Room[], AxiosError>("rooms", () =>
        axios.get(`${config.baseApiUrl}/Room`, axiosConfig).then(
            (resp) => resp.data)
    );
}
const useFetchRoom = (id: string) => {
    return useQuery<Room, AxiosError>("rooms", () =>
        axios.get(`${config.baseApiUrl}/Room/${id}`, axiosConfig).then(
            (resp) => resp.data)
    );
}
const useAddRoom = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Room>(
        (c) => axios.post(`${config.baseApiUrl}/Room`, c, axiosConfig),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("rooms");
                nav("/");
            }
        }
    );
}
const useUpdateRoom = (id: string) => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Room>(
        (room) => {
            // Convert the 'id' property to a string
            const customerWithIdAsString = {
                ...room,
                id: room.id.toString(),
            };

            return axios.put(`${config.baseApiUrl}/Room/${room.id}`, customerWithIdAsString, axiosConfig);
        },
        {
            onSuccess: (_, updatedRoom) => {
                queryClient.invalidateQueries("rooms");
                nav(`/room/${updatedRoom.id}`);
            },
            // Handle errors if needed
            onError: (error) => {
                // Handle and display error messages
                console.error("Error updating room:", error);
            }
        }
    );
}
const useDeleteRoom = (id: number) => {
    const nav = useNavigate();    
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Room>(
        (c) => axios.delete(`${config.baseApiUrl}/Room/${id}`, axiosConfig),
        {
            onSuccess: () => {
                queryClient.removeQueries("rooms");
                nav("/");
            }
        }
    );
}

export default useFetchRooms;
export { useFetchRoom, useAddRoom, useUpdateRoom, useDeleteRoom };