import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import './CircleButton.css';
import {useClassNameBuilder} from "../../hooks/useClassNameBuilder";
import {useHttp} from "../../hooks/useHttp";

const CircleButton = () => {
    const {active} = useSelector(state => state.activeButton)
    const {setOn, setOff} = useActions()
    const {classNameBuilder} = useClassNameBuilder()
    const {request} = useHttp()

    const root = 'circle-button'

    const handlerButton = () => {
        active ? setOff(sendData) : setOn(sendData)
    }

    const sendData = (data) => {
        request('/api/v1/button/status', 'POST', {status: data})
            .catch(() => {
                console.log("Произошла ошибка!")
            })
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