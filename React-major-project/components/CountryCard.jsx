import { NavLink } from "react-router-dom";
import "./CountryCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CountryCard({ country }) {
    const { flags, name, population, region, capital } = country;
    return (
        <li className="card  bg-blue-box col-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <figure>
                <img src={flags.svg} alt={flags.alt} />
            </figure>

            <div className="country-info">
                <p className="card-title">
                    {name.common.length > 10
                        ? name.common.slice(0, 10) + "..."
                        : name.common}
                </p>
                <p>
                    <span className="card-description">Population:</span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className="card-description">Region:</span> {region}
                </p>
                <p>
                    <span className="card-description">Capital:</span>
                    {capital[0]}
                </p>
                <NavLink to={`/country/${name.common}`}>
                    <button>Read More  <FaLongArrowAltRight /></button>
                </NavLink>
            </div>
        </li>

    );
}