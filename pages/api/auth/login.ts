import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/db";
import jsonwebtoken from "jsonwebtoken";
import { Prisma } from "@prisma/client";

type RequestBody = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password }: RequestBody = req.body;

  if (!email || !password) {
    res.status(400).send({ message: "Please provide all credentials." });
    return;
  }

  const userSelect: Prisma.UserSelect = {
    nickname: true,
    email: true,
  };

  const user: any = await prisma.user.findUnique({
    where: { email },
    select: userSelect,
  });

  const token = jsonwebtoken.sign(user, `${process.env.JWT_SECRET}`);
  res.status(201).send({ user, token, message: "OK." });
}
