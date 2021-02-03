import{useState} from 'react'

// let DisplayMsg = "";

const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);
    const [msg, setMsg] = useState("Little Monkeys are Jumping on the Bed! Push the button to see what happens.")
    function decCount() {
        
        if (count !== 0) {
            setCount(count - 1);
        setMsg(`${count} little monkeys jumping on the bed! One fell off and bumped his head. Momma called the doctor and the doctor said...no more monkeys jumping on the bed.`)
        } else {
            setMsg(`No more Monkeys jumping on the bed`)
        }
    }
    
    return(
        <>
<button onClick={decCount}>Monkey Jump</button>


<div>{msg}</div>
        </>
    )
}

export default TenLittleMonkeys;