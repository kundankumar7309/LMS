import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

    const navigate = useNavigate()
    const [input, setInput] = useState(data ? data : '')

    const onSearchHandler = (e) =>{
      e.preventDefault()
      navigate('/course-list/' + input)
    }
    
  return (
    
       <form onSubmit={onSearchHandler} className='flex items-center w-full h-12 max-w-xl bg-white border rounded md:h-14-gray-500/20'>
        <img src={assets.search_icon} alt="search_icon" 
        className='w-10 px-3 md:w-auto'/>
        <input onChange={e => setInput(e.target.value)} value={input} 
         type="text" placeholder="Search courses..." className='w-full pl-10 md:w-3/4'/>
        <button type="submit" className='px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500'>Search</button>
       </form>
   
  )
}

export default SearchBar