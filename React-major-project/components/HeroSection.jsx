import { FaLongArrowAltRight } from "react-icons/fa";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <main className="hero-section">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-12 col-sm-12  hero-content">
                        <h1 className="hero-heading">
                            Explore the World, One Country at a Time.
                        </h1>
                        <p className="hero-para">
                            Discover the history, culture, and beauty of every nation. Sort,
                            search, and filter through countries to find the details you need.
                        </p>
                        <button className="btn">
                            Start Exploring <FaLongArrowAltRight />
                        </button>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-12 col-sm-12 hero-image">
                        <img src="/Images/world.png" />
                    </div>
                </div>
            </div>
        </main>
    );
}