import footerData from "../API/footerData.json";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

export default function Footer() {

    const footerIcons = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    }

    return (
        <footer className="footer-section">
            <div className="row">
                {
                    footerData.map((ele, i) => {
                        const { icon, title, details } = ele;
                        return (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-main-content" key={i}>
                                <div className="footer-icon">{footerIcons[icon]}</div>
                                <div className="footer-content">
                                    <p className="footer-title">{title}</p>
                                    <p className="footer-details">{details}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
           <hr style={{width:"100%",background:"silver",height:"1px",margin:"0rem",borderTopColor:"silver"}}/>
            <div className="copy-right-area">
                <div className="container">
                    <div className="row">
                        <div className="copy-right-text col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <p>
                                Copyright &copy; 2024, All Right Reserved By  
                                <NavLink to="/" target="_blank" style={{color:"blue"}}>
                                       MK-EDUHUB
                                </NavLink>
                            </p>
                        </div>

                        <div className="footer-menu col-6">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="https://www.instagram.com/mahek_dudhat/"
                                        target="_blank"
                                    >
                                        Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://thapatechnical.shop/source-code"
                                        target="_blank"
                                    >
                                        Source Code
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

