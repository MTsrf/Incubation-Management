import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    const {admin} = useContext(AuthContext)
    const token = admin.jwt
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await axios.get(url,config);
                const data = await resp?.data;

                setApiData(data);
                setIsLoading(false);
            } catch (error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);
    const reFetch = async ()=>{
        setIsLoading(true)
        try {
            const res =await axios.get(url,config)
            const data = await res?.data;
            setApiData(data)
        } catch (err) {
            setServerError(err)
        }
        setIsLoading(false)
    };

    return { isLoading, apiData, serverError,reFetch };
};

export default useFetch
