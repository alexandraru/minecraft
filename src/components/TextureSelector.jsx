import React, { useEffect, useState } from 'react'
import useStore from '../hooks/useStore';
import useKeyboard from '../hooks/useKeyboard';
import { dirt, log, glass, grass, wood } from "../images/images";

const images ={ 
    log,
    dirt,
    glass,
    grass,
    wood
}

const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
    const {
        log,
        dirt,
        glass,
        grass,
        wood
    } = useKeyboard();

    const textures = {
        log,
        dirt,
        glass,
        grass,
        wood
    }

    useEffect(() => {
        const pressTexture = Object.entries(textures).find(([k, v]) => v);
        if(pressTexture){
            setTexture(pressTexture[0])
        }
    }, [setTexture, log, dirt,glass, grass, wood])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000);
        setVisible(true);
        return () => { 
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])
  return visible && (
    <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex'>
        {Object.entries(images).map(([k, src]) => {
            return (<img width={40} alt={k} className={`${k === activeTexture ? "border-[2px] border-red-700" : ''}`} src={src} key={k}/>)
        })}
    </div>
  )
}

export default TextureSelector
