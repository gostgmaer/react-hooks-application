import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchAPI() {
    const [posts,setPosts]=useState([])
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [IdFromBtnClick,SetIdFromBtnClick]=useState(1)
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>{
    //         console.log(res)
    //         setPosts(res.data)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])
    const handleClick = ()=> {
        SetIdFromBtnClick(id)
        console.log(SetIdFromBtnClick);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdFromBtnClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        }).catch(err=>{
            console.log(err.headers);
        })
    },[IdFromBtnClick])
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value) } />
        {/* <ul>
            {
                posts.map(post=> <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
        
        <button type="button" onClick={handleClick} ClassName="btn btn-primary"> Get Posts</button>
        <br/>
        <span>{post.body}</span>
    </div>
  )
}

export default FetchAPI