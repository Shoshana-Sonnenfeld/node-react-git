import { useEffect, useState } from "react"


const Details = () => {

    const [name, setName] = useState("shoshana")
    const [lastname, setlastName] = useState("sonnenfeld")
    const [age, setAge] = useState("19")

    return (<>
        <div style={{ textAlign: "center", color: "coral", backgroundColor: "beige" }}>
            <h1>name: {name}</h1>
            <h1>lastname: {lastname}</h1>
            <h1>age: {age}</h1>
        </div>
    </>)
}

export default Details