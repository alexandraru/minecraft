import React from 'react'
import useStore from '../hooks/useStore'

const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld]);

  return (
    <div className='absolute top-[10px] left-[10px]'>
      <button className='border-[0.5px] border-gray-500 rounded text-[18px]' onClick={() => saveWorld()}>Save</button>
      <button className='border-[0.5px] border-gray-500 rounded text-[18px]' onClick={() => resetWorld()}>Reset</button>
    </div>
  )
}

export default Menu
