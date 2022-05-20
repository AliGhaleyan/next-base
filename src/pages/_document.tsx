import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body dir="rtl">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument