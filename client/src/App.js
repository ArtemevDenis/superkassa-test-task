import './App.css';
import CircleButton from "./components/CircleButton/CircleButton";
import React, {useEffect} from "react";
import {useActions} from "./hooks/useActions";

function App() {
    const {fetchStatus} = useActions()

    useEffect(() => {
        fetchStatus()
    }, [])

    return (
        <div className="app">
            <CircleButton/>
        </div>
    );
}

export default App;
