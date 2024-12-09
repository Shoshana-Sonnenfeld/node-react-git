import { useEffect, useState } from "react"

const Strings = () => {
    const [str1, setstr1] = useState("Today is Tuesday, tomorrow is Wednesday!!")
    const [str2, setstr2] = useState("Sorry, I got confused")

    return (<>
        <div
            style={{ textAlign: "center", color: "pink", backgroundColor: "greenyellow" }}>
            <button onClick={alert(`${str1}`)}>string 1</button>
            <button onClick={alert(`${str2}`)}>string 2</button>
        </div>
    </>)
}
export default Strings
