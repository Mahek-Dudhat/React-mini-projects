import "./index.css";

export default function PokemonCards({ data, searchFilter }) {
    //  console.log(data);
    return (<div>
        <ul className="cards">
            {searchFilter.map((currItem) => {
                //console.log();
                return <li className="pokemon-card" key={currItem.id}>

                    <figure>
                        <img className="pokemon-image" src={currItem.sprites.other.dream_world.front_default} />
                    </figure>

                    <p className="pokemon-name">{currItem.name}</p>

                    <div className="pokemon-info pokemon-highlight">
                        <p>{currItem.types.map((item) =>
                            //  console.log(item.type.name);
                            item.type.name
                        ).join(", ")}</p>
                    </div>

                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            <span> Height:</span> {currItem.height}
                        </p>
                        <p className="pokemon-info">
                            <span> Weight:</span> {currItem.weight}
                        </p>
                        <p className="pokemon-info">
                            <span> speed:</span> {currItem.stats[5].base_stat}
                        </p>
                    </div>

                    <div className="grid-three-cols">
                        <div className="pokemon-info">
                            <span>Experience:</span>
                            <p>{currItem.base_experience}</p>
                        </div>

                        <div className="pokemon-info">
                            <span>Attack:</span>
                            <p>{currItem.stats[1].base_stat}</p>
                        </div>

                        <div className="pokemon-info">
                            <span>Abilities:</span>
                            <p>{currItem.abilities.map((item) => item.ability.name).join(",")}</p>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    </div>);
}