import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { useRecoilState } from 'recoil'
import { tokenState } from './atoms'

const ISSUE_TOKEN = gql`
  mutation IssueToken($username: String!, $password: String!) {
    issueToken(username: $username, password: $password)
  }
`

export function useIssueToken() {
  const [, setToken] = useRecoilState(tokenState)

  const [issueToken, mut] = useMutation(ISSUE_TOKEN, {
    onCompleted: d => {
      setToken({ token: d.issueToken })
    },
    onError: _.noop,
  })

  return [issueToken, mut]
}
