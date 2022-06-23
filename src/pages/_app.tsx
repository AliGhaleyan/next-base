import "reflect-metadata";
import React, {FC} from "react";
import {AppProps} from "next/app";
import "./../../styles/globals.scss";
import {useRouter} from "next/router";
import initApp from "../app-init";
import {container} from "tsyringe";
import {AppLang} from "../data/utils/app-lang";
import {wrapper} from "../data/state/store";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    let router = useRouter();
    initApp(container.resolve(AppLang).detectLocaleFromURL(router.asPath));

    return <Component {...pageProps} />
};

export default wrapper.withRedux(App);