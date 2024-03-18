import { useCallback, useEffect, useState } from 'react';

function actionByKey (key){
    const keyActionsMap = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "log",
        Digit2: "dirt",
        Digit3: "glass",
        Digit4: "grass",
        Digit5: "wood"
    }
    return keyActionsMap[key]
}

const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        log: false,
        dirt: false,
        glass: false,
        grass: false,
        wood: false,
    });
    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: true
                })
            })
        }
    });
    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: false
                })
            })
        }
    })
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyDown, handleKeyUp])
  return actions
}

export default useKeyboard
