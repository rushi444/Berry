/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: todos
// ====================================================

export interface todos_allTodos {
  __typename: "Todo";
  id: string | null;
  text: string | null;
  completed: boolean | null;
}

export interface todos {
  allTodos: (todos_allTodos | null)[] | null;
}
