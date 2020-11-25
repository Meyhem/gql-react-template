import { useCallback } from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { parse, stringify } from 'querystring'

function parseQs(qs) {
  qs = qs.replace('?', '')

  return parse(qs)
}

export function useUrlPagination(pageSize) {
  const history = useHistory()
  const parsed = parseQs(history.location.search)

  const current = {
    skip: _.toNumber(parsed.skip || 0),
    take: _.toNumber(parsed.take || pageSize),
  }

  const setPaging = useCallback(
    target => {
      const newQs = { ...parseQs(history.location.search), ...target }
      history.push({ search: stringify(newQs) })
    },
    [history]
  )

  return [current, setPaging]
}
