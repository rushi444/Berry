import { gql } from '@apollo/client'

export const ALL_TODOS = gql`
  query allTodos {
    allTodos {
      id
      text
      completed
    }
  }
`
