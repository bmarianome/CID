import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head lang='es' />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
            )
    }
}

export default Document