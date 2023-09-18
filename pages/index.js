import Inter from '@/components/Inter'
import { Button } from '@geist-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'




export default function Home() {
  return (
    <Inter>
      <Head>
        <title>IHS Shared Hosting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center'
        }}>
          <h1>vaquero.dev</h1>
          <h2>Code Editor & Runner</h2>
          <p>for Irvine Hack Club</p>
          <a href="https://editor.vaquero.dev">
            <Button>
              Launch Editor
            </Button>
          </a>
        </div>
      </div>
    </Inter>
  )
}
