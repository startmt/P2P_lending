import { createSelectorCreator, defaultMemoize } from 'reselect'

export const getCount = createSelectorCreator(defaultMemoize)