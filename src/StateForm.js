import React, { useState } from "react";


export default function StateForm() {
    const [nameState, setNameState] = useState("")

    const handleChange = event => {
        setNameState(event.target.value);
    }

    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Input name"
                    value={nameState}
                    onChange={handleChange}
                    required></input>
                <input className="btn btn-primary" type="submit" value="Click me" />
            </form>
        </div>

    )
}