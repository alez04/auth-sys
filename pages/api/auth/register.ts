import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/db";

type RequestBody = {
  nickname: string;
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nickname, email, password }: RequestBody = req.body;

  if (!nickname || !email || !password) {
    res.status(400).send({ message: "Please provide all credentials." });
    return;
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    res.status(200).send({ message: "Email already taken." });
    return;
  } else {
    const newUser = await prisma.user.create({ data: req.body });
    res.status(201).send({ newUser, message: "Account created." });
  }
}
