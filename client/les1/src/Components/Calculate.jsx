import { useRef, useState } from "react"


const Calc = () => {
    const [nis, setnis] = useState(0)
    const casting = useRef("")

    return (<>
      
        <input  ref={casting} ></input>
        
        <button onClick={()=>{setnis(parseFloat(casting.current.value) * 3.63)}}>המרה מדולר לשקל</button>
        <p>שקל: {nis}</p>

    </>)
}
export default Calc