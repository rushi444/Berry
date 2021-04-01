import { list, makeSchema, objectType, queryField } from 'nexus'
import { join } from 'path'

const Todo = objectType({
  name: 'Todo',
  definition: t => {
    t.string('id')
    t.string('text')
    t.boolean('completed')
  }
})

const AllTodos = queryField('allTodos', {
  type: list(Todo),
  resolve: (parent, args, context, info) => {
    return context.prisma.todo.findMany()
  }
})

export const schema = makeSchema({
  types: [Todo, AllTodos],
  contextType: {
    export: 'Context',
    module: join(__dirname, '/context.ts')
  },
  outputs: {
    schema: true,
    typegen: join(process.cwd(), 'node_modules/@types/nexus-typegen/index.d.ts')
  },
  plugins: []
})
