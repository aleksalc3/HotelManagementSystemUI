import config from "../config";
import { Customer } from "../types/customer";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const useFetchCustomers =()=>{
    return useQuery<Customer[],AxiosError>("customers", ()=>
    axios.get(`${config.baseApiUrl}/Customer`).then(
        (resp)=>resp.data)
    );
}
const useFetchCustomer =(id:number)=>{
    return useQuery<Customer,AxiosError>("customers", ()=>
    axios.get(`${config.baseApiUrl}/Customer/${id}`).then(
        (resp)=>resp.data)
    );
}
export default useFetchCustomers;
export  {useFetchCustomer};