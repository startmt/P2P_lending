import { Upload, Icon, message, Button } from 'antd'
import Link from 'next/link'
import './style.less'

const { Dragger } = Upload

const props = {
  name: 'file',
  multiple: true,
  action:
    'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(
        `${info.file.name} file uploaded successfully.`,
      )
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const UploadFromBorrow = () => {
  return (
    <div className="fromContainer">
      <h3>
        <div className="topicFrom">อัพโหลดเอกสาร</div>
      </h3>
      <div className="uploadTopicFrom">
        กรุณาตรวจสอบเอกสารของคุณให้ถูกต้องและครบถ้วนก่อนอัพโหลดเอกสารเพื่อความรวดเร็วในการอณุมัติเอกสาร
      </div>
      <br />
      <div>
        <div className="adviceTopic">
          *ข้อแนะนำในการอัพโหลดเอกสาร
        </div>
        <div className="advice">
          1.สแกนหนึ่งเอกสารต่อหนึ่งไฟล์
          <br />
          2.เรียงลำดับหน้าถูกต้อง
          <br />
          3.เอกสารปรากฏชัดเจนทั้งหน้า
          <br />
          4.หากอัพโหลดหน้าละไฟล์ ควรตั้งชื่อไฟล์เรียงกัน
          <br />
          5.ขนาดไฟล์ไม่เกิน 20 MB
          <br />
          6.นามสกุลไฟล์ของเอกสารควรเป็น jpg pdf และ png
          เท่านั้น
        </div>
      </div>
      <br />
      <div className="uploadFileContainer">
        <div className="uploadForm">
          <div className="uploadTopic">
            1. หนังสือรับรองการจดทะเบียนบริษัทอายุไม่เกิน 3
            เดือน
          </div>
          <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            2. บัญชีธนาคารหลักแสดงรายการ 6
            เดือนย้อนหลังของบริษัท
          </div>
          <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            3. รานงานเครดิตบูโรของบริษัท
            [ข้อมูลล่าสุดไม่เกิน 30 วัน]
          </div>
          <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            4. งบการเงินที่สอบทานล่าสุด
          </div>
          <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            5. ใบทะเบียนพาณิชย์
          </div>
          <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            6. บัญชีรายชื่อผู้ถือหุ้น บอจ. 5
          </div>
          <br />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
        <br />
      </div>
      <div className="buttonMargin">
        <Link href="/borrower/stateloan">
          <Button type="primary">Submit</Button>
        </Link>
      </div>
    </div>
  )
}

export default UploadFromBorrow
