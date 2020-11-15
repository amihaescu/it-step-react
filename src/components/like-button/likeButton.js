import { React, useState } from 'react';


export default function LikeButton(props) {

    const [currentLikes, setCurrentLikes] = useState(props.likes)

    const increaseLike = () => {
        setCurrentLikes(currentLikes + 1);
    }
    return (
        <div>
            {currentLikes}
            <button className="btn btn-secondary m-2" onClick={increaseLike}>+</button>
        </div>
    )

}