
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Steps, } from 'antd';

const { Step } = Steps;

ReactDOM.render(
  <Steps current={3} status="error">
    <Step title="รอการตอบรับ" description="Fineshed" />
    <Step title="อยู่ในระหว่างทำเรื่องกู้ยืม" description="Fineshed" />
    <Step title="กู้ยืมเสร็จสิ้น" description="Fineshed" />
    <Step title="ชำระยอดค้าง" description="Waiting" />
    <Step title="ชำระเสร็จสิ้น" description="Waiting" />
  </Steps>,
  document.getElementById('container'),
);