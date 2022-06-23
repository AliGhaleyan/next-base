import React, {FC, Fragment, useState} from "react";
import {Button, Container, FormControl} from "react-bootstrap";
import styles from "./AppNavbar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {Cart3} from "react-bootstrap-icons";
import AppMenu from "./AppMenu";

const AppNavbar: FC = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);

    return <Fragment>
        <div className="sticky-top bg-white pt-3">
            <Container fluid>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-nowrap align-items-center">
                        <img src="/assets/img/logo.svg" alt="" width={50} height={50}/>
                        <div className={styles.searchInput}>
                            <span><FontAwesomeIcon icon={faSearch}/></span>
                            <FormControl className="form-control-alternative" placeholder={"جستجو در فروشگاه"}/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <Button variant="outline-secondary" className={styles.signInButton} size={"sm"}>
                            <FontAwesomeIcon icon={faUser} className="ms-2"/>
                            ورود به حساب کاربری
                        </Button>
                        <Cart3 className={styles.shoppingCartIcon}/>
                    </div>
                </div>
            </Container>

            <div className="mb-3">
                <AppMenu onCollapse={(status) => setShowBackdrop(status)} />
            </div>
        </div>
        {showBackdrop ? <div className={styles.backdrop} /> : null}
    </Fragment>;
};

export default AppNavbar;