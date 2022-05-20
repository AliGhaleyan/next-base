import React, {FC} from "react";
import {Col, Container, Row} from "react-bootstrap";
import styles from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
    return <div className="bg-white shadow">
        <Container className={`${styles.container} py-5`}>
            <Row>
                <Col className={styles.links}>
                    <span className={styles.title}>دسته بندی</span>
                    <ul className="list-unstyled pe-0 text-muted">
                        <li>تخم مرغ</li>
                        <li>لبنیات</li>
                        <li>تخم بلدرچین</li>
                        <li>جوجه</li>
                    </ul>
                </Col>
                <Col className={styles.links}>
                    <span className={styles.title}>راهنمای خرید از فروشگاه</span>
                    <ul className="list-unstyled pe-0 text-muted">
                        <li>نحوه ثبت سفارش</li>
                        <li>رویه ارسال سفارش</li>
                        <li>شیوه‌های پرداخت</li>
                    </ul>
                </Col>
                <Col className={styles.links}>
                    <span className={styles.title}>دسترسی سریع</span>
                    <ul className="list-unstyled pe-0 text-muted">
                        <li>خانه</li>
                        <li>درباره ی ما</li>
                        <li>تماس با ما</li>
                    </ul>
                </Col>
                <Col>
                    <h4 className="fw-bold">فروشگاه</h4>
                    <p className="text-muted small mb-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <a href="/#" className="small text-muted">بیشتر ...</a>
                </Col>
            </Row>
            <div className={`${styles.latestSection} mt-5 mx-auto`}>
                <hr className="text-muted"/>
                <div className="d-flex justify-content-between">
                    <div className="text-muted">
                        حق چاپ © 2020 فروشگاه. | کلیه حقوق محفوظ است | سیاست حفظ حریم خصوصی
                    </div>
                    <div className="text-muted">
                        <FontAwesomeIcon icon={faFacebookSquare} size={"2x"} className="me-3"/>
                        <FontAwesomeIcon icon={faTelegram} size={"2x"} className="me-3"/>
                        <FontAwesomeIcon icon={faInstagram} size={"2x"} className="me-3"/>
                    </div>
                </div>
            </div>
        </Container>
    </div>;
};

export default Footer;