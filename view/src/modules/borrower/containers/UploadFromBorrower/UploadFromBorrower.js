import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Upload, Icon, message, Button } from 'antd'
import { Modal } from 'semantic-ui-react'
import Link from 'next/link'
import './style.less'

const { Dragger } = Upload

const UploadFromBorrow = props => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0])
    // Do something with the files
    props.upload(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const onChangeIdCard = (info) => {
    console.log(info)
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
    props.setIdCard(info.file)
  }
  const onChangeSalary = (info) => {
    console.log(info)
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
    props.setSalary(info.file)
  }

  return (
    <Modal open = {props.open}>
      <Modal.Content>
        <Modal.Description>
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
                4.หากอัพโหลดหน้าละไฟล์
                ควรตั้งชื่อไฟล์เรียงกัน
                <br />
                5.ขนาดไฟล์ไม่เกิน 20 MB
                <br />
                6.นามสกุลไฟล์ของเอกสารควรเป็น jpg pdf และ
                png เท่านั้น
              </div>
            </div>
            <br />
            <div className="uploadFileContainer">
              <div className="uploadForm">
                <div className="uploadTopic">
                  1. บัตรประชาชน
                </div>
                <br />
                <Dragger onChange = {onChangeIdCard} {...getRootProps()}>
                  <div {...getInputProps()} />
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to
                    upload
                  </p>
                </Dragger>
              </div>
              <br />
              <div className="uploadForm">
                <div className="uploadTopic">
                  2. สลิปเงินเดือน
                </div>
                <br />
                <Dragger onChange = {onChangeSalary} {...getRootProps()}>
                  <div {...getInputProps()} />
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to
                    upload
                  </p>
                </Dragger>
              </div>
              <br />
              <div className="uploadForm">
                <div className="uploadTopic">
                  3. รายงานเครดิตบรูโร(ข้อมูลล่าสุดไม่เกิน 30 วัน)
                </div>
                <br />
                <Dragger {...getRootProps()}>
                  <div {...getInputProps()} />
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to
                    upload
                  </p>
                </Dragger>
              </div>
              <br />
              <div className="uploadForm">
                <div className="uploadTopic">
                  4. รายการบัญชีธนาคาร
                </div>
                <br />
                <Dragger {...getRootProps()}>
                  <div {...getInputProps()} />
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to
                    upload
                  </p>
                </Dragger>
              </div>
              <br />
            </div>
            <div className="buttonMargin">
              <Button type="primary" onClick={props.submit}>Submit</Button>
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default UploadFromBorrow
