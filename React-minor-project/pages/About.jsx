import countryDetatils from "../API/countryDetails.json";
import AboutCard from "../components/AboutCard";
import "../components/AboutCard.css";

export default function About() {
    return (
        <section className="about-section container">
            <h1 className="about-main-title tracking-in-expand-normal">
                Here are the Interesting Facts
                <br />
                we’re proud of
            </h1>

            <div className="cards row">
                {
                    countryDetatils.map((currEle) => {
                        return <AboutCard key={currEle.id} country={currEle} />
                    })
                }
            </div>
        </section>
    )
}