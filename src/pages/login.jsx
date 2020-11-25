import { Input, Button, Alert } from 'antd'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'

import { useApiIssueToken } from '../features/user'
import { required } from '../forms/validators'

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const LoginForm = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > * {
    margin-bottom: 20px;
  }

  & button {
    align-self: flex-end;
  }
`

export const Login = () => {
  const [issueToken, { error }] = useApiIssueToken()

  return (
    <CenteredContent>
      <Form
        onSubmit={async ({ username, password }) => {
          await issueToken({ variables: { username, password } })
        }}
        render={({ handleSubmit, valid, submitting }) => (
          <LoginForm onSubmit={handleSubmit}>
            <Field
              name="username"
              validate={required()}
              placeholder="Username"
              render={({ input, ...rest }) => <Input {...rest} {...input} />}
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              validate={required()}
              render={({ input, ...rest }) => (
                <Input.Password {...rest} {...input} />
              )}
            />
            {error && <Alert type="error" message={error.message} />}
            <Button disabled={submitting || !valid} htmlType="submit">
              Log In
            </Button>
          </LoginForm>
        )}
      />
    </CenteredContent>
  )
}
