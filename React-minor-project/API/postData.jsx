import axios from "axios";

// Create a axios instance:
const API = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

//Get a data Dynamically using axios get method:

export const getCountryData = () => {
    return API.get("/all?fields=name,population,region,capital,flags");
}

//Get a Individual Country Data using axios Get Method:
export const getIndvidualData = (name) => {
    return API.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}
