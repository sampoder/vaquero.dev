import Inter from '@/components/Inter'
import { UserButton } from '@clerk/nextjs'
import { Breadcrumbs, Page } from '@geist-ui/core'
import { Inbox, Home as HomeIcon } from '@geist-ui/icons'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Editor, { Monaco } from "@monaco-editor/react";
import VictorMono from '@/components/VictorMono'


export function Navbar () {
  return (
    <nav style={{
      width: '100%',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      padding: '0px 32px'
    }}>

      <Breadcrumbs>
        <Breadcrumbs.Item href="/dashboard"><HomeIcon /></Breadcrumbs.Item>
        {/* <Breadcrumbs.Item href=""><Inbox /> Inbox</Breadcrumbs.Item>
        <Breadcrumbs.Item>Page</Breadcrumbs.Item> */}
      </Breadcrumbs>

      <div>
        <UserButton signInUrl="/sign-in" signUpUrl="/sign-up" userProfileMode="modal" afterSignOutUrl="/" />
      </div>

    </nav>
  )
}

export function Code () {
  const defaultValue = "// some comment";

  const editorRef = useRef(null);
  const [code, setCode] = useState(defaultValue);
  
  function handleEditorDidMount(editor, monaco) {
    console.log("editor mounted", editor, monaco);
    editorRef.current = editor;
  }

  return (
    <>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        options={{
          fontFamily: '"Victor Mono"',
          fontSize: 14
        }}
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
        onChange={setCode}
      />
      <VictorMono></VictorMono>
    </>
  )
}

export default function Home() {
  return (
    <Inter>
      <Head>
        <title>Vaquero IDE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Page>
        <Page.Header>
            <h2>Header</h2>
          </Page.Header>
          <Page.Content>
            <h2>Hello, Everyone.</h2>
            <p>This is a simulated page, you can click anywhere to close it.</p>
            <Code />
          </Page.Content>
          <Page.Footer>
            <h2>Footer</h2>
          </Page.Footer>
      </Page>
    </Inter>
  )
}
