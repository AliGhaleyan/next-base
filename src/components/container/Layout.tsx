import React, { FC } from "react";
import AppNavbar from "../common/AppNavbar";
import Footer from "../footer/Footer";
import BreadcrumbsItem from "../../data/util/breadcrumbs-item";
import Breadcrumbs from "../common/Breadcrumbs";

interface Props {
    breadcrumbs?: BreadcrumbsItem[]
}

const Layout: FC<Props> = ({ children, breadcrumbs }) => {
    return <div className="bg-light">
        <AppNavbar />
        {breadcrumbs ? <Breadcrumbs breadcrumbs={breadcrumbs} /> : null}
        <main>
            {children}
        </main>
        <Footer />
    </div>;
};

export default Layout;