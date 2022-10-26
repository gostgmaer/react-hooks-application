import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFechingOne() {
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState('')
    const [post,setPost]= useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1878967')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('Something Went Wrong! please Check your request')
        })
    },[])
  return (
    <div>
        {loading?'loading':post.title} 
        {error?error:null}
    </div>
  )
}

export default DataFechingOne