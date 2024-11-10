import React, { useEffect, useState } from 'react'
import "./menu.scss"
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`)
        console.log(res.data)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[cat])
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
         <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
         </div>
      ))}
    </div>
  )
}

export default Menu