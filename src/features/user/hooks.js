import { gql, useMutation } from '@apollo/client'
import _ from 'lodash'
import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'

import { tokenState } from './state'

const ISSUE_TOKEN = gql`
  mutation IssueToken($username: String!, $password: String!) {
    issueToken(username: $username, password: $password)
  }
`

export function useApiIssueToken() {
  const [, setToken] = useRecoilState(tokenState)
  const history = useHistory()

  const [issueToken, mut] = useMutation(ISSUE_TOKEN, {
    onCompleted: d => {
      setToken({ token: d.issueToken })
      history.push('/dashboard')
    },
    onError: _.noop,
  })

  return [issueToken, mut]
}
