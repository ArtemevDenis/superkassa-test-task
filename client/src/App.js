import CircleButton from "./components/CircleButton/CircleButton";
import React, {useEffect} from "react";
import {useActions} from "./hooks/useActions";
import {useSocket} from "./hooks/useSocket";

function App() {
    const {setStatus} = useActions()
    const {subscribeStatus} = useSocket()
    useEffect(() => {
        subscribeStatus(setStatus)
    }, [])

    return (
        <div className="app">
            <CircleButton/>
        </div>
    );
}

export default App;
