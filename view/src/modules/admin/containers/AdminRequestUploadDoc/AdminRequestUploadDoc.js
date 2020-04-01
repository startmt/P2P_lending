import { Button } from 'antd'
import Link from 'next/link'
import './style.less'

const AdminRequestUploadDoc = () => {
  return (
    <div className="fromContainer">
      <h3>
        <div className="topicFrom">เอกสารที่ถูกอัพโหลด</div>
      </h3>
      <div>
        <div className="showName">
          Name : Kritsakorn Yungpenny
        </div>
      </div>
      <br />
      <div>
        <div className="titleName">Title : Lorem</div>
      </div>
      <br />
      <div className="description">
        Description :
        ยังไม่มีอะไรเพราะยังไม่ได้ใส่อย่าถามนะอิอิ
      </div>
      <br />
      <div className="showTypeDoc">
        ***เปิดไฟล์ได้เฉพาะ jpg, pdf และ png เท่านั้น***
      </div>
      <br />
      <div className="imgTypeDoc">
        <img
          src="https://image.flaticon.com/icons/png/512/337/337940.png"
          alt="W3Schools"
          width="50"
          height="50"
        />
        <img
          src="https://image.flaticon.com/icons/png/512/337/337946.png"
          alt="W3Schools"
          width="50"
          height="50"
        />
        <img
          src="https://image.flaticon.com/icons/png/512/337/337948.png"
          alt="W3Schools"
          width="50"
          height="50"
        />
        <br />
        <br />
      </div>
      <div className="uploadFileContainer">
        <div className="uploadForm">
          <div className="uploadTopic">
            1. หนังสือรับรองการจดทะเบียนบริษัทอายุไม่เกิน 3
            เดือน
          </div>
          <br />
          <div className="marginImgIcon">
            <a
              href="https://www.manarom.com/blog/sex_ed.pdf"
              download>
              <img
                src="https://image.flaticon.com/icons/png/512/337/337946.png"
                alt="W3Schools"
                width="50"
                height="50"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            2. บัญชีธนาคารหลักแสดงรายการ 6
            เดือนย้อนหลังของบริษัท
          </div>
          <br />
          <div className="marginImgIcon">
            <a
              href="https://www.manarom.com/blog/sex_ed.pdf"
              download>
              <img
                src="https://image.flaticon.com/icons/png/512/337/337946.png"
                alt="W3Schools"
                width="50"
                height="50"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            3. รานงานเครดิตบูโรของบริษัท
            [ข้อมูลล่าสุดไม่เกิน 30 วัน]
          </div>
          <br />
          <div className="marginImgIcon">
            <a
              href="https://www.manarom.com/blog/sex_ed.pdf"
              download>
              <img
                src="https://image.flaticon.com/icons/png/512/337/337946.png"
                alt="W3Schools"
                width="50"
                height="50"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            4. งบการเงินที่สอบทานล่าสุด
          </div>
          <br />
          <div className="marginImgIcon">
            <a
              href="https://media3.giphy.com/media/EUHMAueGvjBsc/giphy.gif"
              download>
              <img
                src="https://image.flaticon.com/icons/png/512/337/337940.png"
                alt="W3Schools"
                width="50"
                height="50"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            5. ใบทะเบียนพาณิชย์
          </div>
          <br />
          <div className="marginImgIcon">
            <a
              href="https://www.manarom.com/blog/sex_ed.pdf"
              download>
              <img
                src="https://image.flaticon.com/icons/png/512/337/337946.png"
                alt="W3Schools"
                width="50"
                height="50"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div className="uploadForm">
          <div className="uploadTopic">
            6. บัญชีรายชื่อผู้ถือหุ้น บอจ. 5
          </div>
          <br />
          <div className="marginImgIcon">
            <a
              href="https://www.manarom.com/blog/sex_ed.pdf"
              download>
              <img
                src="https://image.flaticon.com/icons/png/512/337/337946.png"
                alt="W3Schools"
                width="50"
                height="50"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <br />
      </div>
      <div className="buttonMargin">
        <Link href="/admin/adminlistofloantransaction">
          <Button type="primary">Close</Button>
        </Link>
      </div>
    </div>
  )
}

export default AdminRequestUploadDoc
