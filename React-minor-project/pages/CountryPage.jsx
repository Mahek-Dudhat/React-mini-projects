import { useState } from "react";
import { useEffect } from "react";
import { useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIndvidualData } from "../API/postData";
import Loader from "../components/Loader";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./CountryPage.css";

export default function CountryPage() {

    const params = useParams();
    const { name } = params;
    //  console.log(params.name)

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();


    useEffect(() => {
        startTransition(async () => {
            const res = await getIndvidualData(name);
            //console.log(res);
            setCountry(res.data[0]);
        })
    }, [])

    console.log(country);

    if (isPending) return <Loader />;

    return (<>

        <section className="country-sec container">
            <div className="country-div">
                {
                    country && (
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 country-img">

                                <img src={country.flags.svg} alt={country.flags.alt} />

                            </div>

                            <div className="col-6 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 country-info">
                                <p className="card-title">{country.name.official}</p>

                                <div className="info-container">
                                    <p>
                                        <span className="card-description">Native Name:</span>
                                        {
                                            Object.keys(country.name.nativeName)
                                                .map((ele) => (country.name.nativeName[ele].common))
                                        }
                                    </p>
                                    <p>
                                        <span className="card-description">Population:</span>
                                        {country.population}
                                    </p>

                                    <p>
                                        <span className="card-description">Region:</span>
                                        {country.region}
                                    </p>

                                    <p>
                                        <span className="card-description">Sub Region:</span>
                                        {country.subregion}
                                    </p>

                                    <p>
                                        <span className="card-description">Capital:</span>
                                        {country.capital[0]}
                                    </p>

                                    <p>
                                        <span className="card-description">Top Level Domain:</span>
                                        {country.tld.map((ele) => (ele)).join(", ")}
                                    </p>

                                    <p>
                                        <span className="card-description">Curriences:</span>
                                        {
                                            Object.keys(country.currencies)
                                                .map((ele) => country.currencies[ele].name)


                                        }
                                    </p>

                                    <p>
                                        <span className="card-description">Language:</span>
                                        {
                                            Object.keys(country.languages)
                                                .map((ele) => (country.languages[ele]))
                                        }
                                    </p>
                                </div>
                            </div>


                        </div>
                    )
                }


            </div>


        </section>
        <div className="back-btn">
            <NavLink to="/country">
                <button>
                    <FaLongArrowAltLeft /> Go Back
                </button>
            </NavLink>
        </div>
    </>
    );
}
