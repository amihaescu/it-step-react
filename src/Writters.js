function Writer(props) {
    return (
        <>
            <div>
                {props.value.name} {props.value.lastName}
            </div>
            <hr />
        </>
    )
}

export default function WriterList(props) {
    console.log(props)
    return (
        <div>
           {props.data.map(writer => <Writer value={writer} key={writer.id} />)}
        </div>
    )
}