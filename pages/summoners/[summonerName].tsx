import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getSummonerInfo } from "../../lib/api/summoner"
import { useSummonerInfoState } from "../../atoms/summoners"

const Summoners = () => {
  const { query, isReady } = useRouter()
  const { summonerName } = query
  const [, setSummonerInfoState] = useSummonerInfoState()

  const getSummoner = async () => {
    const res = await getSummonerInfo({ summonerName })
    setSummonerInfoState(res)
  }

  console.log(isReady)

  useEffect(() => {
    if (!summonerName) return
    if (!isReady) return

    getSummoner()
  }, [summonerName, isReady])

  if (!isReady) return null

  return <div>tqtqtqtqtqtqttqt</div>
}

export default Summoners
