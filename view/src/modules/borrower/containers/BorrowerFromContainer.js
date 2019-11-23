import React, { Fragment } from 'react'
import BorrowerFrom from '~/components/BorrowerFrom'
import {
  Typography,
  Row,
  Col,
  Icon,
} from 'antd'
const BorrowerFromContainer = (props) => {
    return (
        <section className = "section">
            <div className = "container">
                <Row>
                    <Col>
                    <div id="container" style="padding: 24px"></div>
                    <BorrowerFrom />
                    </Col>
                </Row>
            </div>
        </section>   
    )
}
export default BorrowerFromContainer