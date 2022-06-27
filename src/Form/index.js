import { Button, Col, Row } from "antd";
import React from "react";
import Dropdown from "../common/Dropdown";
import TextInput from "../common/TextInput";
import styles from "./index.module.scss";

import Dots from "../assets/dots.png";
import Equilizer from "../assets/equilizer.png";
import rocket from "../assets/rocket.png";

import { useFormik } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid Email")
    .required("Please enter valid Email"),
  location: Yup.string().required("Please choose location"),
  industry: Yup.string().required("Please choose industry"),
  cart: Yup.string().required("Please choose cart type"),
  sales: Yup.string().required("Please choose sales volume"),
  service: Yup.string().required("Please choose service"),
});

const Form = () => {
  const locationArr = ["India", "Amsterdam", "Pakistan", "Belgium"];
  const industryArr = ["IT", "Mobility", "Tourism", "Bussinesss"];
  const serviceArr = ["Global Tech", "Gases", "Transportation", "Development"];
  const cartArr = ["Online", "Offline", "Scheduled Delivery", "Door to door"];
  const salesArr = [
    "1 - 10 Lakhs",
    "10 - 50 Lakhs",
    "50 Lakhs - 1 Crore",
    "I crore to more",
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
      location: "",
      industry: "",
      cart: "",
      sales: "",
      service: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const { setFieldValue, errors, handleSubmit } = formik;

  console.log("errors", errors);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Row gutter={10}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className={styles.itemWrap}
          >
            <div className={styles.iconWrap}>
              <img src={rocket} alt="icon" />
            </div>
            <p className={styles.title}>Keep It Simple</p>
            <p className={styles.description}>
              Give your business the lift it needs. Together, we'll guide you
              through step-by-step
            </p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className={styles.itemWrap}
          >
            <div className={styles.iconWrap}>
              <img src={Dots} alt="icon" />
            </div>
            <p className={styles.title}>A Few Quick Steps</p>
            <p className={styles.description}>
              Get approved quickly and easily, so you enhance your business with
              us.
            </p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className={styles.itemWrap}
          >
            <div className={styles.iconWrap}>
              <img src={Equilizer} alt="icon" />
            </div>
            <p className={styles.title}>Advanced Features</p>
            <p className={styles.description}>
              Our payment gateway includes 3D Secure, multi-currency conversion,
              and intelligent transaction routing
            </p>
          </Col>
        </Row>
      </div>
      <div className={styles.contents}>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Dropdown
              options={locationArr}
              placeholder="Location"
              onChange={setFieldValue}
              label="location"
              error={errors.location}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <TextInput
              placeholder="Email"
              type="email"
              onChange={setFieldValue}
              label="email"
              error={errors.email}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Dropdown
              options={industryArr}
              placeholder="Industry"
              onChange={setFieldValue}
              label="industry"
              error={errors.industry}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Dropdown
              options={serviceArr}
              placeholder="What Service are you intersted in?"
              onChange={setFieldValue}
              label="service"
              error={errors.service}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Dropdown
              options={cartArr}
              placeholder="Shopping Cart Type"
              onChange={setFieldValue}
              label="cart"
              error={errors.cart}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Dropdown
              options={salesArr}
              placeholder="Monthly Sales Volume"
              onChange={setFieldValue}
              label="sales"
              error={errors.sales}
            />
          </Col>
          <div className={styles.buttonWrap}>
            <Button
              type="primary"
              className={styles.btn}
              htmlType="submit"
              onClick={handleSubmit}
            >
              Create Account
            </Button>
            <p>
              Already have an Account&nbsp;<a href="/">Sign In</a>
            </p>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Form;
