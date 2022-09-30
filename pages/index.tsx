import type { NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import { getSummonerInfo } from "../lib/api/summoner"

const Home: NextPage = () => {
  const [summonerName, setSummonerName] = useState<string>()

  const handleSummonerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSummonerName(value)
  }

  const sendSummonerName = async () => {
    console.log(summonerName)
    const res = await getSummonerInfo({ summonerName })
  }

  return (
    <div>
      <input type="text" onChange={handleSummonerName} />
      <button type="submit" onClick={sendSummonerName}>
        전송
      </button>
    </div>
  )
}

export default Home
