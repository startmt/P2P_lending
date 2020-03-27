import React from 'react'
import { Card, Empty, Button } from 'antd'
import PropTypes from 'prop-types'
const ClueCard = ({ icon, description, fileUrl }) => {
  console.log(fileUrl)
  const handleClick = () => {
    window.open(
      `${window.location.origin}/${fileUrl}`,
      '_ blank',
    )
  }
  return (
    <Card>
      <Empty
        image={icon}
        imageStyle={{
          height: 60,
        }}
        description={<span>{description}</span>}>
        <Button onClick={handleClick} type="primary">
          ดูไฟล์
        </Button>
      </Empty>
    </Card>
  )
}

ClueCard.propTypes = {
  icon: PropTypes.string || PropTypes.any,
  description: PropTypes.string,
  fileUrl: PropTypes.string,
}

export default ClueCard
