import { Table as AntTable, Button } from 'antd'
import styled from 'styled-components'

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
  pagination: { skip, take },
  onPaginationChange,
  ...rest
}) => {
  return (
    <StyledTableContainer>
      <StyledTable
        pagination={false}
        onChange={(...args) => console.log(args)}
        {...rest}
      />
      <Pager>
        <Button
          disabled={skip <= 0}
          onClick={() =>
            onPaginationChange({ skip: Math.max(skip - take, 0), take })
          }
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
