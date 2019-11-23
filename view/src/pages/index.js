import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '../hocs/with-redux'
import { LandingLayout } from '../layouts/landing'
import HomeContainer from '../modules/home/containers/HomeContainer'
import withAuth from '../hocs/with-auth'
import withIntl from '../hocs/with-intl'
const Index = (props) => {
  console.log(props)
  const { setPageName } = props
  setPageName('Landing')
  return (
    <Fragment>
      <LandingLayout>
        <HomeContainer />
      </LandingLayout>
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
  withIntl,
)(Index)
