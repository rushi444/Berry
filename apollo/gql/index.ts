import { gql } from '@apollo/client'

export const ALL_TODOS_QUERY = gql`
  query todos {
    allTodos {
      id
      text
      completed
    }
  }
`
