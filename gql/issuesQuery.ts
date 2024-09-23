import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query {
    issues {
      content
      id
      name
      status
    }
  }
`
