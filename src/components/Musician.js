function Musician(props) {
    return (
        <>
        <h3>Musician: {props.name}</h3>
        <p>{props.tourName ? props.tourName
        : "not on tour"}</p>
        </>
    )
}

export default Musician;