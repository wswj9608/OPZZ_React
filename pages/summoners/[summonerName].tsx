import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import { getSummonerInfo } from "../../lib/api/summoner"
import { useSummonerInfoState } from "../../atoms/summoners"
import Profile from "../../components/summoners/Profile"

const Summoners = () => {
  const { query, isReady } = useRouter()
  const { summonerName } = query
  const [summonerInfoState, setSummonerInfoState] = useSummonerInfoState()

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

  return (
    <SummonersWrapper>
      {summonerInfoState && <Profile summonerInfo={summonerInfoState} />}
    </SummonersWrapper>
  )
}

const SummonersWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgreen;
`

export default Summoners
