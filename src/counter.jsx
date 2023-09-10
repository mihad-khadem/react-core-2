import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    
    return(
        <div style={{
            border: '2px solid yellow',
            padding: '5px'
        }}>
            <h3>Counts : {count} </h3>
            <button style={{backgroundColor:'red', color:'White'}} onClick={handleAdd}>+</button>
            <button style={{backgroundColor:'red', color:'White', margin:'10px'}} onClick={handleReduce}>-</button>
        </div>
    )
}