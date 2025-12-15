import { useState } from "react";   

export default function StateExample() {
    const [count, setCount] = useState(0);
    function buttonClick() {
        setCount(count + 1);
    }
    return (
        <>
            <style>
            {`
            .box {
                width: 380px;
                padding: 70px;
                text-align: center;
                background-color: violet;
                margin-left: 300px;
            }
            `}
            </style>
            
            <form className="box">
            <h1 style={{color: "brown", backgroundColor: "lightgreen", padding: "50px"}}>State Example</h1>
            <button type="button" onClick={buttonClick} style={{backgroundColor: "lightblue", padding: "20px", fontSize: "20px"}}>
                Visitor Count = {count}
            </button>
            </form>
        </>
    );

}
