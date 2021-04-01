import { list, objectType, queryField } from 'nexus'

export const Todo = objectType({
  name: 'Todo',
  definition: t => {
    t.string('id')
    t.string('text')
    t.boolean('completed')
  }
})

export const AllTodos = queryField('allTodos', {
  type: list(Todo),
  resolve: (parent, args, context, info) => {
    return context.prisma.todo.findMany()
  }
})
