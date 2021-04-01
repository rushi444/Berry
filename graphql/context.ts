import { NextApiRequest } from 'next'

import { prisma, PrismaClient } from './prisma'

export type Context = {
  prisma: PrismaClient
}

type RequestType = {
  req: NextApiRequest
}

export const createContext = async ({ req }: RequestType): Promise<Context> => {
  return {
    prisma
  }
}
