import {
  inputObjectType,
  list,
  mutationField,
  objectType,
  queryField
} from 'nexus'

// Todo Object
export const Todo = objectType({
  name: 'Todo',
  definition: t => {
    t.string('id')
    t.string('text')
    t.boolean('completed')
  }
})

// Fetch all Todos
export const AllTodos = queryField('allTodos', {
  type: list(Todo),
  resolve: (parent, args, context, info) => {
    return context.prisma.todo.findMany()
  }
})

// Add a todo
export const addTodoInput = inputObjectType({
  name: 'addTodoInput',
  definition: t => {
    t.nonNull.string('text')
    t.boolean('completed')
  }
})

export const addTodo = mutationField('addTodo', {
  type: Todo,
  args: { input: addTodoInput },
  resolve: (parent, { input }, { prisma }, info) => {
    return prisma.todo.create({
      data: { ...input }
    })
  }
})

// Update Todo
export const updateTodoInput = inputObjectType({
  name: 'updateTodoInput',
  definition: t => {
    t.nonNull.string('id')
    t.string('text')
    t.boolean('completed')
  }
})

export const updateTodo = mutationField('updateTodo', {
  type: Todo,
  args: { input: updateTodoInput },
  resolve: (parent, { input }, { prisma }, info) => {
    const { id, ...rest } = input
    return prisma.todo.update({
      where: { id },
      data: { ...rest }
    })
  }
})

// Delete Todo
export const deleteTodoInput = inputObjectType({
  name: 'deleteTodoInput',
  definition: t => {
    t.nonNull.string('id')
  }
})

export const deleteTodo = mutationField('deleteTodo', {
  type: Todo,
  args: { input: deleteTodoInput },
  resolve: (parent, { input }, { prisma }, info) => {
    return prisma.todo.delete({ where: { id: input.id } })
  }
})
