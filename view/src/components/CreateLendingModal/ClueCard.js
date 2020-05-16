import React from 'react'
import { Card, Empty, Button, Upload } from 'antd'
import PropTypes from 'prop-types'
const ClueCard = ({
  icon,
  name,
  handleFile,
  description,
}) => {
  const salaryProps = {
    beforeUpload: (file) => {
      handleFile(name, file)
      return false
    },
  }
  return (
    <Card>
      <Empty
        image={icon}
        imageStyle={{
          height: 60,
        }}
        description={<span>{description}</span>}>
        <Upload
          fileList={[]}
          {...salaryProps}
          multiple={false}>
          <Button>อัพโหลดไฟล์</Button>
        </Upload>
      </Empty>
    </Card>
  )
}

ClueCard.propTypes = {
  icon: PropTypes.string || PropTypes.any,
  name: PropTypes.string,
  handleFile: PropTypes.func,
  description: PropTypes.string,
}

export default ClueCard
