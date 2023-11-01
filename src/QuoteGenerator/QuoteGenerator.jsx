import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles.css'



const QuoteGenerator = ({ url }) => {

    const [quote, setQuote] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            const {advice} = response.data.slip
            setQuote(advice)
            console.log(response.data.slip.advice)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
         <div id='quote' className='border rounded-2xl p-10 w-[50Fem] 
         h-[10em] flex flex-col justify-evenly items-center bg-[#F8F8FF] '>
            <h3 className='text-blue-300 text-xl'>Quote of the day : </h3>
            <h1 className='text-blue-700 text-2xl text-center'>{quote}</h1>
            <button className='bg-transparent text-black border-2 border-blue-500 rounded-full px-6 py-2 mt-3' onClick={()=>fetchData()}>Need a Advice</button>
            
            </div>   
        </>
    )
}

export default QuoteGenerator