import { useEffect, useTransition } from "react";
import { getCountryData } from "../API/postData";
import Loader from "../components/Loader";
import { useState } from "react";
import CountryCard from "../components/CountryCard";
import "../components/CountryCard.css";
import SearchFilter from "../components/SearchFilter";


export default function Country() {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("All");

    console.log(countries);

    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await getCountryData();
                console.log(res.data);
                setCountries(res.data);
            } catch (err) {
                console.log("Oops," + err);
            }
        })
    }, [])

    const handleSearch = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }

    const handleRegion = (country) => {
        if (filter == "All") {
            return country;
        }

        return country.region === filter;

    }

    let filterData = countries.filter((country) => handleSearch(country) && handleRegion(country))

    if (isPending) return (<Loader/>);

    return (
        <section className="country-section container">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
            <div className="cards row">

                {
                    filterData.map((country, ind) => {
                        return <CountryCard key={ind} country={country} />
                    })
                }
            </div>

        </section>
    )



}