import React, { useState } from "react";

export default function Button(props) {
    const [btText, setBtText] = useState("Before click");
    const [bkColor, setBkColor] = useState("yellow");
    const btClick = () => {
        setBkColor("red");
        setBtText("You clicked button");
    }
    return <button
        onClickAct={btClick}
        style={{ backgroundColor: bkColor, height: "30px" }}>
        {btText}
    </button>;
}