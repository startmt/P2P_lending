import { Map, isImmutable } from 'immutable'
import createSelector from '~/helpers/createImmuableSelector'

export const getNamePage = state => isImmutable(state) ? state.getIn(['page', 'query', 'pageName']) : Map()