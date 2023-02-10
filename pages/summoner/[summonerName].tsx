import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { getSummonerProfileToAxios } from '@/lib/api/summoner'
import { useSummonerLeagues, useSummonerMatchs } from '@/atoms/summoners'
import SummonerProfile from '@/components/summoners/SummonerProfile'
import Match from '@/components/summoners/Match'
import League from '@/components/summoners/League'
import matchDb from '@/@fake-db'
import MatchStatistics from '@/components/summoners/MatchStatistics'
import { getLeaguesToAxios } from '@/lib/api/leauges'

const Summoners = () => {
  const [, setSummonerMatchs] = useSummonerMatchs()
  const [summonerLeagues, setSummonerLeagues] = useSummonerLeagues()

  const getLeagues = async () => {
    const res = await getLeaguesToAxios()
    setSummonerLeagues(res)
  }

  useEffect(() => {
    getLeagues()
  }, [])
  // const matchData = matchDb()

  return (
    <SummonersWrapper>
      <SummonerProfile />
      <UserHistoryWrappser>
        <div className="user-info">
          {summonerLeagues?.map(league => (
            <League key={league.queueType} data={league} />
          ))}
        </div>
        <div>
          <MatchStatistics />
          <Match />
        </div>
      </UserHistoryWrappser>
    </SummonersWrapper>
  )
}

const SummonersWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #1c1c1f;

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
