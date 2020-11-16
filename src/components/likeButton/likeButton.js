import { useEffect, useState } from 'react'
import './likeButton.css'
export default function LikeButton(props) {

    const [currentLikes, setCurrentLikes] = useState(props.likes)
    const increaseLikes = () => {
        setCurrentLikes(currentLikes + 1)
    }

    useEffect(() => {
        console.log('Somet clicked like...')
    })

    return (
        <div>
            {currentLikes}
            <button className="btn btn-primary likeButton m-2" onClick={increaseLikes}>+</button>
        </div>
    )
}