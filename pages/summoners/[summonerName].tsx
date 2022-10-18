import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { getSummonerInfo } from '@/lib/api/summoner'
import { useSummonerMatchs, useSummonerProfile } from '@/atoms/summoners'
import Profile from '@/components/summoners/Profile'
import Match from '@/components/summoners/Match'

const Summoners = () => {
  const { query, isReady } = useRouter()
  const { summonerName } = query
  const [summonerProfile, setSummonerProfile] = useSummonerProfile()
  const [, setSummonerMatchs] = useSummonerMatchs()

  const getSummoner = async () => {
    const res = await getSummonerInfo({ summonerName })
    const { id, puuid, imageUrl, summonerLevel, name, matchs } = res

    setSummonerProfile({ id, puuid, imageUrl, summonerLevel, name })
    setSummonerMatchs(matchs)
  }

  useEffect(() => {
    if (!summonerName) return
    if (!isReady) return

    getSummoner()
  }, [summonerName, isReady])

  if (!summonerProfile) return null

  return (
    <SummonersWrapper>
      <Profile summonerProfile={summonerProfile} />
      <UserHistoryWrappser>
        <div className="user-info" />
        <Match />
      </UserHistoryWrappser>
    </SummonersWrapper>
  )
}

const SummonersWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: lightgreen;

  .user-info {
    width: 332px;
    background-color: papayawhip;
  }
`

const UserHistoryWrappser = styled.div`
  margin: 8px auto 0px;
  max-width: 1080px;
  display: flex;
  gap: 8px;
  height: calc(100% - 228px - 8px);
`

export default Summoners
