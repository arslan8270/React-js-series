import React, { useEffect, useState } from "react";

function UseEffectHook() {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    useEffect(() => {
        alert("data")
    }, [data])

    useEffect(() => {
        alert("count")
    }, [count])

    return (
        <>

            <h1>Data {data}</h1>
            <button onClick={() => setData(data + 1)}>Update Data</button>


            <h1>Count {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </>

    )
}

export default UseEffectHook