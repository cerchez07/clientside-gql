import { gql } from '@urql/next'

export const EditIssueMutation = gql`
  mutation EditIssue($input: EditIssueInput!) {
    editIssue(input: $input) {
      content
      id
      name
      status
    }
  }
`
