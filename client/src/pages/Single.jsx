import React from 'react'
import "./single.scss"
import {Pencil, Trash} from "react-bootstrap-icons"
import {Link} from "react-router-dom" 
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src=" https://via.placeholder.com/150" alt="" />

        <div className="user">
          <img src="https://via.placeholder.com/150" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <div className="pencil-wrap">
              <Pencil className='icon icon-edit'/>
              </div>
            </Link>
            <Link>
            <div className="trash-wrap">
              <Trash className='icon icon-delete'/>
            </div>
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque inventore, molestiae perspiciatis consequuntur doloremque velit, 
          voluptas est possimus fugiat non eius libero modi aut debitis suscipit, fuga doloribus omnis cupiditate.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at odio ut quis ab possimus labore quisquam corrupti illo aliquid odit dolores! Tempora nesciunt voluptatum,
           sunt odit accusantium consectetur deleniti.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single