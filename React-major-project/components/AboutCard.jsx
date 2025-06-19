import "./AboutCard.css";

export default function AboutCard({ country }) {
    console.log(country);
    const { id, countryName, capital, population, interestingFact } = country;
    return (
        <div key={id} className="card bg-blue-box col-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in"  data-aos-delay="200">
            <p className="card-title">{countryName}</p>
            <p>
                <span className="card-description">Capital:</span>
                {capital}
            </p>
            <p>
                <span className="card-description">Population:</span>
                {population}
            </p>
            <p>
                <span className="card-description">Interesting Fact:</span>
                {interestingFact}
            </p>
        </div>
    );
}