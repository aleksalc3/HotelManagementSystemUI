import config from "../config";
import { Customer } from "../types/customer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const useFetchCustomers = () => {
    return useQuery<Customer[], AxiosError>("customers", () =>
        axios.get(`${config.baseApiUrl}/Customer`).then(
            (resp) => resp.data)
    );
}
const useFetchCustomer = (id: string) => {
    return useQuery<Customer, AxiosError>("customers", () =>
        axios.get(`${config.baseApiUrl}/Customer/${id}`).then(
            (resp) => resp.data)
    );
}
const useAddCustomer = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Customer>(
        (c) => axios.post(`${config.baseApiUrl}/Customer`, c),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("customers");
                nav("/");
            }
        }
    );
}
const useUpdateCustomer = (id: string) => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Customer>(
        (customer) => {
            // Convert the 'id' property to a string
            const customerWithIdAsString = {
                ...customer,
                id: customer.id.toString(),
            };

            return axios.put(`${config.baseApiUrl}/Customer/${customer.id}`, customerWithIdAsString);
        },
        {
            onSuccess: (_, updatedCustomer) => {
                queryClient.invalidateQueries("customers");
                nav(`/customer/${updatedCustomer.id}`);
            },
            // Handle errors if needed
            onError: (error) => {
                // Handle and display error messages
                console.error("Error updating customer:", error);
            }
        }
    );
}
const useDeleteCustomer = (id: number) => {
    const nav = useNavigate();    
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Customer>(
        (c) => axios.delete(`${config.baseApiUrl}/Customer/${id}`),
        {
            onSuccess: () => {
                queryClient.removeQueries("customers");
                nav("/");
            }
        }
    );
}

export default useFetchCustomers;
export { useFetchCustomer, useAddCustomer, useUpdateCustomer, useDeleteCustomer };