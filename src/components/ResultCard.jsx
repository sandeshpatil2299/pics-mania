import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCollection, toastPopup } from '../Redux/features/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch= useDispatch()

    const saveToCollection= () => {
        dispatch(addToCollection(item))
        dispatch(toastPopup())
    }

    return (
        <div className='relative mb-4 break-inside-avoid'>
            {item.type == 'photo' ? <img src={item.src} alt="" className='w-full rounded-lg' /> : ''}
            {item.type == 'video' ? <video autoPlay muted loop src={item.src} /> : ''}
            {/* {item.type == 'gifs' ? '' : ''}  */}
            <div className='absolute w-full flex justify-between bottom-0 p-2 bg-linear-to-t from-black to-black/5'>
                <h1 className='line-clamp-1'>{item.title}</h1>
                <button 
                    className='bg-blue-400 px-2 py-1 rounded-md cursor-pointer active:scale-95'
                    onClick={() => {
                        saveToCollection(item)
                    }}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard