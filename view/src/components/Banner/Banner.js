import { Fragment } from 'react'
import { Typography } from 'antd'
import './styles.scss'

const { Title, Paragraph } = Typography
const Banner = (props) => {
    const {
        title,
        description
    } = props
  return (
    <Fragment>
      <div className="home-banner">
        <div className="container">
          <div class="home-banner-centered">
            <Title className="text-white text-center">
              {title}
            </Title>
            <Paragraph className="text-center text-white">
              {description}
            </Paragraph>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Banner
