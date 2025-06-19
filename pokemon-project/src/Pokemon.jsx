import { useState, useEffect } from "react";
import PokemonCards from "./PokemonCards";
import TextField from '@mui/material/TextField';
import "./index.css";

export default function Pokemon() {

    let [pokemonsData, setPokemonsData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    let [input, setInput] = useState("");

    let API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    let getPokemonData = async () => {

        try {
            let res = await fetch(API);
            let data = await res.json();

            console.log("first",data);

            let detailPokemonsData = data.results.map(async (currVal) => {
                let response = await fetch(currVal.url);
                console.log(response);
                let data = await response.json();

                console.log("second",data);

                return data;
            })

            console.log(detailPokemonsData);
            //  console.log(PokemonsData);
            let detailData = await Promise.all(detailPokemonsData);
            // console.log(detailData);
            setPokemonsData(detailData);
            setLoading(false);

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err);
        }
    }

    console.log(pokemonsData);

    useEffect(() => {
        getPokemonData();
    }, [])

    let searchFilter = pokemonsData.filter((val) =>
        // console.log( val.name.toLowerCase());
        val.name.toLowerCase().includes(input.toLowerCase())
    )


    if (loading) {
        return (<div className="loading">
            <h1>Loading...</h1>
        </div>);
    }
    else if (error) {
        return (<div className="error">
            <h1>Error: {error.message}</h1>
        </div>);
    }
    else {
        return (

            <section className="container">
                <header>
                    <h1>Let's catch a pokemon</h1>
                </header>

                {/* <TextField id="pokemon" label="Enter a pokemon" variant="standard" size='small' value={input} onChange={(e) => setInput(e.target.value)} /> */}
                <input type="text" placeholder="Enter a pokemon name.." value={input} onChange={(e) => setInput(e.target.value)} />
                <br />
                <br />
                <PokemonCards data={pokemonsData} searchFilter={searchFilter} />
            </section>
        );
    }


}