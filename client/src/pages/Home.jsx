import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      desc: 'This is the first post',
      img: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'Second Post',
      desc: 'This is the second post',
      img: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'Third Post',
      desc: 'This is the third post',
      img: 'https://via.placeholder.com/150'
    }

  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link"  to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home