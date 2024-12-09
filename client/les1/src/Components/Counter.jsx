import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setcounter] = useState(0)
    return (<>
        <div
            style={{ textAlign: "center", color: "pink", backgroundColor: "greenyellow", fontSize: 200, }}>
            <button onClick={() => {
                if (counter < 6)
                    return setcounter(counter + 1)
                else {
                    alert("הגעת לספרה 6")
                    return setcounter(0)
                }
            }
            }>{counter}</button>
        </div>
    </>
    )
}
export default Counter