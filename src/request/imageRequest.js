import axios from "axios";
import MAIN_URL, { api_key } from "./apiConfig"


export const getTrendingItems = async (params,itemType) => {
   let finalParams = {...params,api_key:process.env.REACT_APP_API_KEY || api_key}
    try {
        const res = await axios.get(`${MAIN_URL}/${itemType}/trending`, {
            params: finalParams,
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
};

export const getSearchItemsItems = async (params,itemType) => {
    let finalParams = {...params,api_key:process.env.REACT_APP_API_KEY || api_key}
     try {
         const res = await axios.get(`${MAIN_URL}/${itemType}/search`, {
             params: finalParams,
         });
         return res?.data;
     } catch (error) {
         console.log(error);
     }
 };