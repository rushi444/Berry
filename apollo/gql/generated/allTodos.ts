/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allTodos
// ====================================================

export interface allTodos_allTodos {
  __typename: "Todo";
  id: string | null;
  text: string | null;
  completed: boolean | null;
}

export interface allTodos {
  allTodos: (allTodos_allTodos | null)[] | null;
}
