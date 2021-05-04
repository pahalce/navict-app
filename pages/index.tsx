import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'
import type { FormEvent, ChangeEvent } from 'react'

const Home = () => {
  return (
    <div>
      <Head>
        <title>navict</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <UserBanner />

        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Navict</p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}

export default Home
