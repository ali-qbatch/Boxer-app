import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
class Pricing extends Component {
  render() {
    const { UserHeading, h1Heading, userLimit } = this.props.price;
    return (
      <React.Fragment>
        <Col lg={4} md={6} sm={6} xs={12}>
          <Box bgcolor="#fff" className="inner-pricing-div">
            <Box align="center" className="user-div">
              <h3 className="User-heading">{UserHeading}</h3>
            </Box>
            <Box className="pricing-detail">
              <Typography variant="h5" align="center" className="h1-heading">
                {h1Heading}
              </Typography>
              <h5 align="center" className="user-limit">
                {userLimit}
              </h5>
              <Box align="center" className="place-order-button  pb-4">
                <Button className="btn button">Get Started</Button>
              </Box>
              <Box className="order-list">
                <ul className="list-unstyled pb-4">
                  <li className="check-li">
                    <FaCheck color="#0d2187" className="check-icon" />
                    FNSKU Label printing
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Expiration label
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    ll FBA label
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Amazon compliant barcodes
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Barcodes scanner input
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Unlimited shipment
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Shipment Tracking
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Box labeling
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Col>
      </React.Fragment>
    );
  }
}

export default Pricing;
