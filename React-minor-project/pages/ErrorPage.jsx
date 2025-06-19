import "./ErrorPage.css";
import { useNavigate, NavLink, useRouteError, replace } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
     console.error(error);

    const navigate = useNavigate();
    console.log(navigate);

    if (error.status === 404) {
        return (

            <section className=" error-section">
                <div id="error-text">
                    <figure>
                        <img
                            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                            alt="404 page"
                        />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            {error.statusText}
                        </p>
                    </div>
                </div>
                <button style={{ marginRight: "2rem" }} onClick={() => navigate(-1, { replace: true })}>Go back to Previous Page</button>

                <NavLink to="/" className="btn">
                  <button style={{marginTop:"2rem"}}>
                      Go Back To HomePage
                  </button>
                </NavLink>
                {/* <button className="btn">
                Go Back To HomePage
            </button> */}
            </section>
        );
    }

}