import { memo } from "react";
import "./Button.css";

export default memo(function Button({ children, onClick }) {
    console.log("button component rendering.."+children);
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
})