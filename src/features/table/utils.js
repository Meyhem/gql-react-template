import { parse } from 'querystring'
import _ from 'lodash'

export function applyOrderBy(cols, orderBy) {
  return _.map(cols, c => {
    const colSort = _.find(orderBy, ['name', c.id])

    return {
      ...c,
      sortOrder: colSort && colSort.dir,
    }
  })
}

export function toListFilter(f) {
  return {
    skip: f.skip,
    take: f.take,
    orderBy: _.map(f.orderBy, ({ name, dir }) => ({
      name,
      dir: dir === 'descend' ? 'DESC' : 'ASC',
    })),
  }
}

export function parseQs(qs) {
  qs = qs.replace('?', '')

  return parse(qs)
}

export function parseOrderBy(s) {
  if (!s) {
    return []
  }
  let dir = 'ascend'
  if (_.startsWith(s, '-')) {
    dir = 'descend'
    s = _.trimStart(s, '-')
  }

  return [{ name: s, dir }]
}

export function stringifyOrderBy(orderBy) {
  return _.join(
    _.map(orderBy, o => `${o.dir === 'descend' ? '-' : ''}${o.name}`),
    ','
  )
}
