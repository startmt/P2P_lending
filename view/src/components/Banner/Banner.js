import { Fragment } from 'react'
import { Typography } from 'antd'
import './styles.less'

const { Title, Paragraph } = Typography
const Banner = (props) => {
  const { title, description, background } = props
  return (
    <Fragment>
      <div
        className="home-banner"
        style={{ backgroundImage: `url('${background}')` }}>
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
