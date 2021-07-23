import React from 'react'
export default function User(props) {

    return (

        <div>
            <ul><img src = {props.Object[0].avatar} alt= ""/>
            <h1>{props.Object[0].name}</h1>
            <label for= "location">Location:</label>
            <h3> {props.Object[0].location}</h3>
            <label for= "foodtype">Foodtype:</label>
            <h3>{props.Object[0].foodType}</h3>
            <label for="age">Age:</label>
            <h3>{props.Object[0].age}</h3>
            <label for= "likes">Likes:</label>
            <h3>{props.Object[0].likes}</h3>
            {/* <p>{props.Object[0].twitterUsername}</p> */}
            <label for= "twitterlink">Twitter:</label>
            <h3>{props.Object[0].twitterLink}</h3> 
            </ul>

    

            <ul><img src = {props.Object[1].avatar} alt= ""/>
            <h1>{props.Object[1].name}</h1>
            <label for= "locaton">Location:</label>
            <h3>{props.Object[1].location}</h3>
            <label for= "foodtype">Foodtype:</label>
            <h3>{props.Object[1].foodType}</h3>
            <label for= "lage">Age:</label>
            <h3>{props.Object[1].age}</h3>
            <label for= "likes">Likes:</label>
            <h3>{props.Object[1].likes}</h3>
            {/* <p>{props.Object[1].twitterUsername}</p> */}
            <label for= "twitterlink">Twitter:</label>
            <h3>{props.Object[1].twitterLink}</h3>
            </ul>
        </div>

    )}