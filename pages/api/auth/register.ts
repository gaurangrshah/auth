import { registerUser } from "@/lib/prisma/handlers"
import type { NextApiRequest, NextApiResponse } from 'next'

async function register(req:NextApiRequest, res:NextApiResponse) {
  if(req.method !== 'POST') return res.status(404).json({error: {message: "invalid request"}})
  const {name, email, password} =  req.body
  if(!name || !email || !password) {
    return res.status(400).json({error: {message: 'invalid credentials'}})
  }

  const user = await registerUser(req.body)
  if(!user) return res.status(500).json({error: {message: "prisma server error"}});

  return res.status(201).json(user)
}

export default register;
