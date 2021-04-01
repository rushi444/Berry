import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './types'

export const schema = makeSchema({
  types,
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql/context.ts')
  },
  outputs: {
    schema: true,
    typegen: join(process.cwd(), 'node_modules/@types/nexus-typegen/index.d.ts')
  },
  plugins: []
})
