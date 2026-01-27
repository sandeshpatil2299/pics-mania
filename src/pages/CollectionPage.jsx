import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection, removeFromCollection, toastPopupRemove, toastPopupRemoveCollection } from '../Redux/features/collectionSlice'

const CollectionPage = () => {
    const collections = useSelector((state) => state.collection.items)
    const dispatch = useDispatch();

    const clearCollection = () => {
        dispatch(clearCollection())
        dispatch(toastPopupRemoveCollection())
    }

    const removeSingleFromCollection = (item) => {
        dispatch(removeFromCollection(item))
        dispatch(toastPopupRemove())
    }

    useEffect(() => {

    }, [removeFromCollection])

    return (
        <div className='flex flex-col py-10 px-28'>
            <div className='flex justify-between pb-10'>
                <h1 className='text-3xl'>Your Collection</h1>
                <button
                    className='bg-red-400 font-semibold px-4 py-1 rounded-md cursor-pointer active:scale-95'
                    onClick={() => {
                        clearCollection()
                    }}
                >
                    Clear
                </button>
            </div>
            <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
                {
                    collections.map((item, index) => {
                        return (
                            <div key={index} className='relative mb-4 break-inside-avoid'>
                                {item.type == 'photo' ? <img src={item.src} alt="" className='w-full rounded-lg' /> : <video autoPlay muted loop src={item.src} />}
                                {/* {item.type == 'gifs' ? '' : ''}  */}
                                <div className='absolute w-full flex justify-between bottom-0 p-2 bg-linear-to-t from-black to-black/5'>
                                    <h1 className='line-clamp-1 capitalize'>{item.title}</h1>
                                    <button
                                        className='bg-yellow-400 text-black px-2 py-1 rounded-md cursor-pointer active:scale-95'
                                        onClick={() => {
                                            removeSingleFromCollection(item);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPage