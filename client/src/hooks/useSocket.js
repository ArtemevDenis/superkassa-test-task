import {io} from "socket.io-client";

const socket = io('ws://localhost:8000');

export const useSocket = () => {
    const subscribeStatus = (cb) => {
        socket.on('buttonStatus', status => cb(status));
    }

    const emitStatus = (status) => {
        socket.emit('buttonStatus', status);
    }

    const getStatus = () =>{

    }
    return {emitStatus, subscribeStatus}
}