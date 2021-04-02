import { useQuery } from '@apollo/client'
import { Children } from 'react'

import { ALL_TODOS_QUERY } from '../apollo/gql'
import { todos } from '../apollo/gql/generated/todos'

const Home = () => {
  const { data, loading, error } = useQuery<todos>(ALL_TODOS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <h1>Welcome to Berry.js</h1>
      {Children.toArray(
        data.allTodos.map(todo => (
          <div>
            <h4>{todo.text}</h4>
            <p>{todo.completed.toString()}</p>
          </div>
        ))
      )}
    </>
  )
}

export default Home
