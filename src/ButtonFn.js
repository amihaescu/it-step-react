import { useState } from "react"

export default function ButtonFn(props) {
    const [currentValue, setCurrentValue] = useState(props.startVal)

    function btClick() {
        setCurrentValue(currentValue + 1);
    }
    
    return <button onClick={btClick}>{currentValue}</button>
}