import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL;
const axiosPublic = axios.create({
    baseURL: url
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;