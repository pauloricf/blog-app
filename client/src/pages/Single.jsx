import React, { useContext, useEffect, useState } from 'react'
import "./single.scss"
import {Pencil, Trash} from "react-bootstrap-icons"
import {Link, useLocation, useNavigate, useParams} from "react-router-dom" 
import Menu from '../components/Menu'
import axios from 'axios'
import moment from "moment"
import { AuthContext } from '../context/authContext'
import DOMPurify from "dompurify";

const Single = () => {

  const [post, setPost] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  const {id} = useParams()
  console.log(id)

  const {currentUser} = useContext(AuthContext)


  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${id}`)
        console.log(res.data)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  },[id])

  const handleDelete = async() => {
    try {
      const res = await axios.delete(`http://localhost:8800/api/posts/${id}`, {withCredentials: true})
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  console.log("post: " ,post)
  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
         {currentUser?.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`} state={post} >
              <div className="pencil-wrap">
              <Pencil className='icon icon-edit'/>
              </div>
            </Link>
            <Link>
            <div className="trash-wrap">
              <Trash onClick={handleDelete} className='icon icon-delete'/>
            </div>
            </Link>
          </div>}
        </div>
        <h1>{post.title} </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> 
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single