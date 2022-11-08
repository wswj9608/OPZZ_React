import { useSummonerLeagues } from '@/atoms/summoners'
import React from 'react'
import styled from 'styled-components'
import { emblems } from '@/assets/images'
import { Text } from '@/elements'
import Image from 'next/image'

const League = ({ data }: LeagueProps) => {
  const [leagues] = useSummonerLeagues()

  type ModuleType = typeof emblems

  const emblemGenerator = <K extends keyof ModuleType>(tier: K): ModuleType[K] => {
    return emblems[tier]
  }

  console.log(leagues)
  return (
    <LeagueWrapper>
      <div className="header">
        <Text>솔로랭크</Text>
      </div>
      <div className="content">
        <div>
          <Image src={emblemGenerator(data.tier)} width={72} height={72} />
        </div>
        <div>
          <Text>{}</Text>
        </div>
      </div>
    </LeagueWrapper>
  )
}

const LeagueWrapper = styled.div`
  width: 100%;
  height: 132px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #31313c;
`

export default League
