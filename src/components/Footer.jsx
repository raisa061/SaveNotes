import React from "react";

function Footer(){
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return <footer> <p>copyright@{year}</p> </footer>;
}

export default Footer;