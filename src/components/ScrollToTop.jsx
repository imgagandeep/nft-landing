import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
    return (
        <div className={`scrollToTop ${visible ? "visible" : ""}`}>
            <a href={process.env.REACT_APP_ROOT_URL}>
                <BsChevronUp />
            </a>
        </div>
    );
}
