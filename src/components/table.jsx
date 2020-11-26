import { Table as AntTable, Button } from 'antd'
import styled from 'styled-components'
import _ from 'lodash'

import { applyOrderBy } from '../features/table'

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Pager = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;
`

const PagerPosition = styled.div`
  padding: 0 24px;
`

const StyledTable = styled(AntTable)`
  width: 100%;
`

export const Table = ({
  columns,
  pagination: { skip, take },
  onPaginationChange,
  orderBy,
  onOrderByChange,
  ...rest
}) => {
  const cols = applyOrderBy(columns, orderBy)

  return (
    <StyledTableContainer>
      <StyledTable
        pagination={false}
        onChange={(_page, _filter, sorter) => {
          if (onOrderByChange) {
            onOrderByChange({
              orderBy: _.compact([
                sorter.order && { name: sorter.column.id, dir: sorter.order },
              ]),
            })
          }
        }}
        columns={cols}
        {...rest}
      />
      <Pager>
        <Button
          disabled={skip <= 0}
          onClick={() => {
            if (onPaginationChange) {
              onPaginationChange({ skip: Math.max(skip - take, 0), take })
            }
          }}
        >
          &lt;
        </Button>
        <PagerPosition>
          {skip} - {skip + take}
        </PagerPosition>
        <Button onClick={() => onPaginationChange({ skip: skip + take, take })}>
          &gt;
        </Button>
      </Pager>
    </StyledTableContainer>
  )
}
