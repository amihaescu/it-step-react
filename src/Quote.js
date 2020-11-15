export default function Quote(props) {
    return (
        <>
            <h2>{props.text}</h2>
            <h2>{props.author}</h2>
            <h3>Seen: {props.seen}</h3>
        </>
    )
}

Quote.defaultProps = {
    seen: 0, 
    author: 'No author provided'
}