import pool from "../db.js"
import jwt from "jsonwebtoken"

export const getPosts = (req, res) => {
  const q = req.query.cat ? "SELECT * FROM posts WHERE cat = $1" : "SELECT * FROM posts";
  const values = req.query.cat ? [req.query.cat] : [];

  pool.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.rows);
  });
}
export const getPost = (req, res) =>{
  const q = `select username, title, "desc", p.img, u.img as userImg, cat, date FROm users u JOIN posts p ON u.id = p.uid WHERE p.id = $1`
  pool.query(q, [req.params.id], (err, data) => {
    if(err) return res.status(500).json(err);

    return res.status(200).json(data.rows[0])
  })
}
export const addPost = (req, res) =>{
  res.json("from controller")
}
export const deletePost = (req, res) =>{
  const token = req.cookies.access_token
  if(!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if(err) return res.status(403).json("Token is not valid");

    const postId = req.params.id
    const q = `delete from posts where id = $1 and uid = $2`
    pool.query(q, [postId, userInfo.id], (err, data) => {
      if(err) return res.status(403).json("You can delete only your post")

      return res.json("Post has been deleted")
    })
  })
}
export const updatePost = (req, res) =>{
  res.json("from controller")
}
