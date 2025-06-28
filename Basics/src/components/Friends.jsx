import { useState } from "react";

const Friends = () => {
    // const [friends, setFriends] = useState(["Sameer", "faiz"])

    // // setfriends render the component and it will change ui or state 
    // const addFriend = () => setFriends([...friends, "Humza"])
    // const removeFriend = () => setFriends(friends.filter((f) => f !== "Humza"));
    // const updateFriend = () => {
    //     setFriends(friends.map((f) => (f === "Sameer" ? "SameerAnjum" : f)));
    // }

    // 2 example movie 
    // const [movie, setMovie] = useState({
    //     title: "Equalizer 3",
    //     rating: 5
    // })

    // const changeRating = () => setMovie({...movie, rating: 7});

    const [movies, setMovies] = useState([
        {id: 1, title: 'spider Man', rating: 3},
        {id: 2, title: 'super Man', rating: 5}
    ])

    const changeMovie = () => {
       setMovies(
            movies.map((m) => m.id === 1 ? {...m, title: 'Shaddi Me Zaroor Aana'}: m)
       )
    }




    return <section>
        {/* {friends.map((f) => (
            <ul key={Math.random()}>
                <li > 
                {f}
            </li>

            </ul>
        ))}
        <button onClick={addFriend}>Add Friend</button>
        <button onClick={removeFriend}>Remove Friend</button>
        <button onClick={updateFriend}>Update Friend</button> */}

        {/* movie example */}
        {/* <h2>Title: {movie.title}</h2>
        <p>Rating: {movie.rating}</p>
        <button onClick={changeRating}>Change Ratting</button> */}


        {movies.map((m) => (
            <li key={m.id}>
                <p>Title: {m.title}</p>
            </li>
        ))}

        <button onClick={changeMovie}>Change Movie</button>

    </section>
}

export default Friends;