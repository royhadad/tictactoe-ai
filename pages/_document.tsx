import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
    static getInitialProps({renderPage}: any) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {(this.props as any).styleTags}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument