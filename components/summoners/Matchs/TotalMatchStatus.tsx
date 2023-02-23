import React from 'react'
import styled from 'styled-components'
import IconBaron from '@/assets/images/icons/icon-baron.svg'
import IconDragon from '@/assets/images/icons/icon-dragon.svg'
import IconTower from '@/assets/images/icons/icon-tower.svg'
import { ProgressBar, Text } from '@/elements'
import { useTeamsSelector } from '@/atoms/summoners'
import { blue, gray, main, red } from '@/styles/palette'
import { getPercentage } from '@/utils'
import { TotalMatchStatusProps } from './types'

const TotalMatchStatus = ({ gameId }: TotalMatchStatusProps) => {
  const teams = useTeamsSelector()
  const targetTeams = teams?.find(team => team.gameId === gameId)

  if (!targetTeams) return null

  const { friendlyTeam, enemyTeam } = targetTeams
  const isWin = friendlyTeam.win

  const friendlyIconColor = isWin ? blue[500] : red[500]
  const enemyIconColor = !isWin ? blue[500] : red[500]

  const friendlyTeamObj = friendlyTeam.objectives
  const enemyTeamObj = enemyTeam.objectives

  return (
    <MatchStatusWrapper>
      <div className="object">
        <div>
          <IconBaron fill={friendlyIconColor} />
          <Text>{friendlyTeamObj.baron.kills}</Text>
        </div>
        <div>
          <IconDragon fill={friendlyIconColor} />
          <Text>{friendlyTeamObj.dragon.kills}</Text>
        </div>
        <div>
          <IconTower fill={friendlyIconColor} />
          <Text>{friendlyTeamObj.tower.kills}</Text>
        </div>
      </div>
      <div className="total">
        <div>
          <ProgressBar
            width={getPercentage(friendlyTeamObj.champion.kills, enemyTeamObj.champion.kills)}
            height={16}
            bgColor={isWin ? red[500] : main[500]}
            fill={isWin ? main[500] : red[500]}
          />
          <div className="text-wrap">
            <Text>{friendlyTeamObj.champion.kills}</Text>
            <Text>Total Kill</Text>
            <Text>{enemyTeamObj.champion.kills}</Text>
          </div>
        </div>
        <div>
          <ProgressBar
            width={getPercentage(friendlyTeam.totalGold, enemyTeam.totalGold)}
            height={16}
            bgColor={isWin ? red[500] : main[500]}
            fill={isWin ? main[500] : red[500]}
          />
          <div className="text-wrap">
            <Text>{friendlyTeam.totalGold.toLocaleString()}</Text>
            <Text>Total Gold</Text>
            <Text>{enemyTeam.totalGold.toLocaleString()}</Text>
          </div>
        </div>
      </div>
      <div className="object">
        <div>
          <IconBaron fill={enemyIconColor} />
          <Text>{enemyTeamObj.baron.kills}</Text>
        </div>
        <div>
          <IconDragon fill={enemyIconColor} />
          <Text>{enemyTeamObj.dragon.kills}</Text>
        </div>
        <div>
          <IconTower fill={enemyIconColor} />
          <Text>{enemyTeamObj.tower.kills}</Text>
        </div>
      </div>
    </MatchStatusWrapper>
  )
}

const MatchStatusWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  background-color: ${gray[100]};
  justify-content: space-between;
  align-items: center;

  .object {
    display: flex;
    gap: 16px;

    div {
      display: flex;
      gap: 4px;
    }
  }

  .total {
    width: 389px;
    padding: 8px;

    > div {
      position: relative;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      .text-wrap {
        position: absolute;
        width: 389px;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        box-sizing: border-box;

        p {
          font-size: 10px;
          color: ${gray[900]};
        }
      }
    }
  }

  /* .bar {
    height: 16px;
    margin-bottom: 8px;
    background-color: ${red[500]};

    &:last-child {
      margin-bottom: 0;
    }
  } */
`

export default TotalMatchStatus
