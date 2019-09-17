import React from 'react'
import { compose } from 'redux'
import withRedux from '../hocs/with-redux'
const Index = () => <div>Hello World</div>
const mapStateToProps = null
const mapDispatchToProps = null

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
