import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../Redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gifs']
    const dispatch= useDispatch()
    const activeTab= useSelector((state) => state.search.activeTab)

    return (
        <div className=' flex gap-4 my-5'>
            {
                tabs.map((value, index) => {
                    return (
                        <button 
                            key={index} 
                            className={`${activeTab == value ? 'text-lg uppercase bg-green-500 px-4 py-2 rounded-lg font-bold active:scale-95 cursor-pointer' : 'text-lg uppercase bg-gray-500 px-4 py-2 rounded-lg font-bold active:scale-95 cursor-pointer'}`}
                            onClick={() => {
                                dispatch(setActiveTab(value))
                            }}
                            >
                                {value}
                            </button>
                    )
                })
            }
        </div>
    )
}

export default Tabs