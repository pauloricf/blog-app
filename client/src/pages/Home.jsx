import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
const Home = () => {
  const [posts, setPosts] = useState([])

  const location = useLocation()
  const cat = useLocation().search;
  console.log(cat)
  

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`)
        console.log(res.data)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[cat])
  
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link"  to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.desc)}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home