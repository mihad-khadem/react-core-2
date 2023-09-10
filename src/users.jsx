import { useEffect, useState } from "react"

export default function User(){
    //! Declare a state to hold Data
    const [users, setUser] = useState([])
    //! useEffect with call back dependencies array
    useEffect(() => {
        //! Use fetch to get the data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
        
    }, [])

    return (
        
        <div>
            <h1>Users: {users.length} </h1>
        
        </div>
    )
}