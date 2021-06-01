import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Tic-tac-toe</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;