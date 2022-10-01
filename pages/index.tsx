import type { NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import Link from "next/link"

const Home: NextPage = () => {
  const [summonerName, setSummonerName] = useState<string>()

  const handleSummonerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSummonerName(value)
  }

  return (
    <div>
      <input type="text" onChange={handleSummonerName} />
      <Link href={`/summoners/${summonerName}`}>
        <button>전송</button>
      </Link>
    </div>
  )
}

export default Home
