import { useCallback } from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { stringify } from 'querystring'

import { parseQs, parseOrderBy, stringifyOrderBy } from './utils'

export function useUrlTable(pageSize) {
  const history = useHistory()
  const parsed = parseQs(history.location.search)

  const tableState = {
    skip: _.toNumber(parsed.skip || 0),
    take: _.toNumber(parsed.take || pageSize),
    orderBy: parseOrderBy(parsed.orderBy),
  }

  const setTableState = useCallback(
    target => {
      const newQs = {
        ...parseQs(history.location.search),
        ...target,
        orderBy: stringifyOrderBy(target.orderBy),
      }
      history.push({ search: stringify(newQs) })
    },
    [history]
  )

  return [tableState, setTableState]
}
