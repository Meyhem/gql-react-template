import _ from 'lodash'

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = () => v => (_.isNil(v) ? 'Required' : undefined)
