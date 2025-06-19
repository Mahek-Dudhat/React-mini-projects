import { useCallback } from "react";
import { useMemo } from "react";
import { memo } from "react";

import Button from "./Button";


export default memo(function SearchFilter({ search, setSearch, filter, setFilter, countries, setCountries }) {

    console.log("input field rendering..");

    let handleSortingAsc = useCallback(() => {
        console.log("asc called..");

        const sorted = [...countries].sort((a, b) => {
            return a.name.common.localeCompare(b.name.common)

        })
        //  console.log(sortCountries);

        setCountries(sorted);

    }, [setCountries])

    let handleSortingDsc = useCallback(() => {
        console.log("dsc called..");

        const sorted = [...countries].sort((a, b) => {
            return b.name.common.localeCompare(a.name.common);
        })

        setCountries(sorted);
    }, [setCountries])

    const handleInputChange = useCallback((e) => {

        setSearch(e.target.value)

    }, [setSearch])

    return (
        <div className="container search-filter">
            <div className="main-div">
                <div>
                    <input type="text" className="form-control" placeholder="Search Here.." value={search} onChange={handleInputChange} />
                </div>
                <div>
                    {/* <button onClick={() => handleSorting("asc")}>Asc</button> */}
                    <Button onClick={handleSortingAsc}>Asc</Button>
                </div>

                <div>
                    {/* <button onClick={() => handleSorting("dsc")}>Dsc</button> */}
                    <Button onClick={handleSortingDsc}>Desc</Button>
                </div>

                <select className="form-select" style={{ width: "10%" }} value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
})