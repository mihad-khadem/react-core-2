import { useState } from "react"

export default function Team (){

    const [team , setTeam] = useState(11);
    const handleAdd = () => {
        const newPlayer = team + 1  
        setTeam(newPlayer)
    }
    const handleRemove = () => {
        const newPlayer = team - 1
        setTeam(newPlayer)
    }

    const teamStyle = {
        border: '2px solid black',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
}
    return(
        <div style={teamStyle}>
            <h2>Players : {team}s</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}