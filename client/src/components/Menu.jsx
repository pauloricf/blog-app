import React from 'react'
import "./menu.scss"

const Menu = () => {

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