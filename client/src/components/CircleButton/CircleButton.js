import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import './CircleButton.css';
import {useClassNameBuilder} from "../../hooks/useClassNameBuilder";
import {useSocket} from "../../hooks/useSocket";

const CircleButton = () => {
    const {active} = useSelector(state => state.activeButton)
    const {setOn, setOff} = useActions()
    const {classNameBuilder} = useClassNameBuilder()
    const {emitStatus} = useSocket()

    const root = 'circle-button'

    const handlerButton = () => {
        active ? setOff(emitStatus) : setOn(emitStatus)
    }


    const handlerCSS = () => {
        return `circle-button--${active ? 'green' : 'red'}`
    }

    return (
        <button onClick={handlerButton} className={classNameBuilder(root, handlerCSS())}>
            {active ? 'ON' : 'OFF'}
        </button>
    );
};

export default CircleButton;