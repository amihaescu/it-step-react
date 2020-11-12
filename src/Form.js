import React from "react";

export default function MyForm() {
    let uRef = React.createRef();
    const handleSubmit = event => {
        event.preventDefault();
        alert(uRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="userName" ref={uRef} />
            <input type="submit" value="Click me" />
        </form>
    )
}