
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const mysty = {
    color: "#06487e",
    textAlign : "center"
  };

const BorrowerFrom = (props) => {
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <h2 style={mysty}>
            ข้อมูลผู้กู้ยืมเงิน
        </h2>
        <Form.Item label="คำนำหน้าชื่อ" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'กรุณาเลือกคำนำหน้าชื่อ' }],
          })(
            <Select placeholder="Please select a country">
              <Option value="Mr">นาย</Option>
              <Option value="Miss">นางสาว</Option>
              <Option value="Mrs">นาง</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="ชื่อจริง (ภาษาไทย)">
          {getFieldDecorator('real_name', {
            rules: [
              {
                type: 'real_name',
                message: 'The input is not valid Real name',
              },
              {
                required: true,
                message: 'กรุณากรอกชื่อจริง',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="นามสกุล (ภาษาไทย)">
          {getFieldDecorator('last_name', {
            rules: [
              {
                type: 'last_name',
                message: 'The input is not valid Real name',
              },
              {
                required: true,
                message: 'กรุณากรอกชื่อจริง',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="เลขบัตรประชาชน">
          {getFieldDecorator('IdCardNumber', {
            rules: [
              {
                type: 'IdCardNumber',
                message: 'The input is not valid ID Card Number',
              },
              {
                required: true,
                message: 'กรุณากรอกรหัสบัตรประชาชน',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="อัตราส่วนการถือหุ้น (%)">
          {getFieldDecorator('ShareHoldingRatio', {
            rules: [
              {
                type: 'ShareHoldingRatio',
                message: 'The input is not valid ID Card Number',
              },
              {
                required: true,
                message: 'กรุณากรอกรหัสบัตรประชาชน',
              },
            ],
          })(<Input />)}
        </Form.Item> 
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'กรุณากรอก E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="คุณจดทะเบียนสมรสแล้วหรือยัง?">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="a">ใช่</Radio>
              <Radio value="b">ไม่ใช่</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
}

export default BorrowerFrom
          