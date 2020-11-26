import { Alert } from 'antd'
import { useQuery, gql } from '@apollo/client'
import _ from 'lodash'

import { useUrlTable, toListFilter } from '../features/table'

import { Page } from '../components/page'
import { Table } from '../components/table'

const QUERY_USERS = gql`
  query QueryUsers($filter: ListFilter!) {
    users(filter: $filter) {
      id
      username
      firstname
      lastname
      role
    }
  }
`

const cols = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    id: 'username',
    title: 'username',
    dataIndex: 'username',
    sorter: true,
  },
  { title: 'First name', dataIndex: 'firstname' },
  { title: 'Last name', dataIndex: 'lastname' },
]

export const Users = () => {
  const [tableState, setTableState] = useUrlTable(10)
  const { data, loading, error } = useQuery(QUERY_USERS, {
    variables: { filter: { ...toListFilter(tableState) } },
  })

  return (
    <Page heading="Users">
      {error && <Alert type="error" message={error.message} />}
      <Table
        rowKey="id"
        columns={cols}
        dataSource={data && data.users}
        loading={loading}
        pagination={_.pick(tableState, ['take', 'skip'])}
        orderBy={tableState.orderBy}
        onPaginationChange={setTableState}
        onOrderByChange={setTableState}
      />
    </Page>
  )
}
