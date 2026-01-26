import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/features/searchSlice'
import { Link } from 'react-router'

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))

        setText('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className='flex gap-3'>
                <input
                    className='block bg-gray-700 outline-none text-white placeholder:text-white text-lg rounded-md px-4 py-2 w-full'
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder='Search what you want...' />
                <button className='text-lg uppercase border-2 px-4 py-2 rounded-lg active:scale-95'>Search</button>
                <Link to={'/collection'} className='text-lg uppercase border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg active:scale-95'>Collection</Link>
            </form>
        </div>
    )
}

export default SearchBar