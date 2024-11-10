import pool from "../db.js";
import bcrypt from 'bcrypt'; // Certifique-se de importar o bcrypt
import jwt from "jsonwebtoken"

export const register = (req, res) => {
  const q = 'select * from users where email = $1 or username = $2';
  pool.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err); // Retorna erro 500 em caso de falha no servidor

    // Verifica se o usuário já existe
    if (data.rows.length) return res.status(409).json("Usuário já existe");

    // Gera o hash da senha
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "insert into users(username, email, password) values ($1, $2, $3)";
    const values = [
      req.body.username,
      req.body.email,
      hash
    ];
    
    // Insere o novo usuário no banco de dados
    pool.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err); // Retorna erro 500 em caso de falha no servidor
      return res.status(201).json({ message: "Usuário criado", username: req.body.username });
    });
  });
};

export const login = (req, res) => {
  const q = "select * from users where username = $1"  
  pool.query(q, [req.body.username], (err, data) =>{
    if(err) return res.status(500).json(err);
    if(data.rows.length === 0) return res.status(404).json("Usuário não encontrado")

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data.rows[0].password)

    if(!isPasswordCorrect) return res.status(400).json("Usuário ou senha incorretos")

    const token = jwt.sign({id: data.rows[0].id}, "jwtkey")
    const {password, ...other} = data.rows[0]

    res.cookie("access_token", token, {
      httpOnly: true,
      secure:false,
    }).status(200).json(other)
  })
};

export const logout = (req, res) => {
  // Implementação do logout
  res.clearCookie("access_token",{
    httpOnly: true,
    secure: true,
    sameSite: "None"
  }).status(200).json("User has been logout")
};
