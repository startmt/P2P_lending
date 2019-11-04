import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '../hocs/with-redux'
import { Layout } from '../layouts'
import HomeContainer from '../modules/home/containers/homeContainer'
const Index = (props) => {
  const { setPageName } = props
  setPageName('Landing')
  return (
    <Fragment>
      <Layout>
        <HomeContainer />
      </Layout>
    </Fragment>
  )
}
const mapStateToProps = null
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
