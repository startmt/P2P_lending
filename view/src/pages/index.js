import React from 'react'
import { compose } from 'redux'
import withRedux from '../hocs/with-redux'
import { createStructuredSelector } from 'reselect'

const Index = () => (
  <>
    <div>Hello</div>
  </>
)
const getCount = (state) =>
  state.getIn(['authentication', 'auth'])
const mapStateToProps = (state, props) =>
  createStructuredSelector({
    count: getCount,
  })(state, props)
const mapDispatchToProps = null

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
