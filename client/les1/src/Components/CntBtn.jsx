import { useEffect } from "react"
import { useRef, useState } from "react"

const CntBtn = () => {
    const [count, setCount] = useState(0)
    const cnt=useRef("")

    const handleClick = () => {
        countRef.current += 1; // עדכון הערך של ה-Ref
        setCount(cnt.current); // עדכון התצוגה
      };

    return (<>
    <div>
      <button onClick={handleClick}>להצגת המוה בתגית P </button>
      <p>Current Count: {count}</p>
      <p>Double Count: {count * 2}</p>
    </div>
    </>
    )
}
export default CntBtn;
