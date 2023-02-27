import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text } from '@/elements'
import { useRouter } from 'next/router'
import { blue, gray, main, red } from '@/styles/palette'
import { HistoryCardProps } from './types'
import ItemsBox from './ItemsBox'
import MatchDetail from './MatchDetail'
import { IconArrowDownSvg } from '@/assets/images/icons'
import { PlayerMatchData } from '@/lib/api/types'
import { perkIcons } from '@/assets/images/perkIcons'

const HistoryCard = ({ match }: HistoryCardProps) => {
  const { query } = useRouter()
  const { summonerName } = query
  const { gameDuration, playerMatchDatas, gameEndTimestamp, queueType } = match
  const [isShowDetail, setIsShowDetail] = useState(false)

  const {
    champion,
    challenges,
    summonerSpells,
    kills,
    deaths,
    assists,
    win,
    primaryPerkId,
    subPerkStyleId,
    teamId,
    items,
    visionWardsBoughtInGame,
    totalMinionsKilled,
    minionsPerMinute,
    // mostMultiKills,
  } = match.playerMatchDatas.find(data => data.summonerName === summonerName) as PlayerMatchData

  const { championIcon, championLevel, championName } = champion
  const { kda, killParticipation } = challenges

  const perkIcon = (perkId: number) => {
    return perkIcons[perkId]
  }

  const handleMatchDetail = () => {
    setIsShowDetail(!isShowDetail)
  }

  return (
    <>
      <HistoryCardWrapper isWin={win}>
        <GameInfoWrapper>
          <div className="wrap">
            <div>
              <Text color={win ? '#5383e8' : '#e84057'} weight="bold">
                {queueType}
              </Text>
              <Text color="#9e9eb1">{gameEndTimestamp}</Text>
            </div>
            <div>
              <Text color="#9e9eb1" weight="bold">
                {win ? '승리' : '패배'}
              </Text>
              <Text color="#9e9eb1">{`${gameDuration.split(':')[0]}분 ${gameDuration.split(':')[1]}초`}</Text>
            </div>
          </div>
        </GameInfoWrapper>
        <GamePlayDataWrapper>
          <div>
            <div className="first-line">
              <div className="champion">
                <div className="champ">
                  <Image className="champ-icon" src={championIcon} alt="champ" width="48" height="48" />
                  <div className="champ-level">
                    <Text size="10px" color="#FFF">
                      {championLevel}
                    </Text>
                  </div>
                </div>
                <div className="spells">
                  {summonerSpells.map(spell => (
                    <Image
                      key={spell.spell_id}
                      className="spell-icon"
                      src={spell.image_url}
                      alt="champ"
                      width={22}
                      height={22}
                      layout="responsive"
                    />
                  ))}
                </div>
                <div className="runes">
                  <Image
                    className="rune-icon"
                    src={perkIcon(primaryPerkId)}
                    alt="champ"
                    width="22"
                    height="22"
                    layout="fixed"
                  />
                  <Image
                    className="rune-icon"
                    src={perkIcon(subPerkStyleId)}
                    alt="champ"
                    width="22"
                    height="22"
                    layout="fixed"
                  />
                </div>
              </div>
              <div className="kda">
                <Text size="15px" weight="bold" color="#FFF">
                  {kills} <span className="slash">/</span> <span className="death">{deaths}</span>{' '}
                  <span className="slash">/</span> {assists}
                </Text>
                <Text color="#7b7a8e">{`${kda}:1 평점`}</Text>
              </div>
              <div className="status">
                <Text size="11px" color="#e84057">
                  {`킬관여 ${killParticipation}%`}
                </Text>
                <Text size="11px" color="#9e9eb1">
                  {`제어 와드 ${visionWardsBoughtInGame}`}
                </Text>
                <Text size="11px" color="#9e9eb1">
                  {`CS ${totalMinionsKilled} (${minionsPerMinute})`}
                </Text>
                <Text size="11px" color="#9e9eb1" weight="bold">
                  Gold 4
                </Text>
              </div>
            </div>
            <div className="second-line">
              <ItemsBox items={items} isWin={win} />
              {/* {mostMultiKills && (
                <div className="most-kill-badge">
                  <Text color="#FFF">{mostMultiKills}</Text>
                </div>
              )} */}
              {/* <div className="mvp-badge">
            <Text   color="#FFF">
              MVP
            </Text>
          </div> */}
            </div>
          </div>
        </GamePlayDataWrapper>
        <GameParticipantsWrapper>
          <div className="wrap">
            <div>
              {playerMatchDatas.map((data, idx) => {
                if (data.teamId === 100) {
                  const isSearchUser = data.summonerName === summonerName

                  return (
                    <div className="summoner-wrap" key={idx}>
                      <Image
                        style={{ borderRadius: '4px' }}
                        src={data.champion.championIcon}
                        alt="champ"
                        width={16}
                        height={16}
                      />
                      <div className="summoner-name">
                        <Text color={isSearchUser ? '#FFF' : '#9e9eb1'}>{data.summonerName}</Text>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
            <div>
              {playerMatchDatas.map((data, idx) => {
                if (data.teamId === 200) {
                  const isSearchUser = data.summonerName === summonerName

                  return (
                    <div className="summoner-wrap" key={idx}>
                      <Image
                        style={{ borderRadius: '4px' }}
                        src={data.champion.championIcon}
                        alt="champ"
                        width={16}
                        height={16}
                      />
                      <Text color={isSearchUser ? '#FFF' : '#9e9eb1'}>{data.summonerName}</Text>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </GameParticipantsWrapper>
        <DetailButton isWin={win} onClick={handleMatchDetail} isShowDetail={isShowDetail}>
          <IconArrowDownSvg fill={win ? blue[500] : red[500]} />
        </DetailButton>
      </HistoryCardWrapper>
      {isShowDetail && <MatchDetail gameDatas={match.playerMatchDatas} teamId={teamId} gameId={match.gameId} />}
    </>
  )
}

const HistoryCardWrapper = styled.div<{ isWin: boolean }>`
  width: 100%;
  background-color: lightcoral;
  margin-top: 8px;
  display: flex;
  height: 96px;
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: ${({ isWin }) => (isWin ? main[500] : red[500])};
  background-color: ${({ isWin }) => (isWin ? main[100] : red[100])};
  box-sizing: border-box;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const GameInfoWrapper = styled.div`
  width: 100%;
  margin-left: 12px;
  height: 96px;
  display: flex;
  align-items: center;

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 77px;

    p {
      font-size: 12px;
    }
  }
`

const GamePlayDataWrapper = styled.div`
  min-width: 377px;
  margin-left: 8px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  height: 96px;

  .first-line {
    display: flex;
    height: 53px;
    align-items: center;
  }

  .champion {
    display: flex;
    align-items: center;

    .champ {
      position: relative;
      width: 48px;
      height: 48px;

      .champ-level {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #202d37;
      }
    }

    .champ-icon {
      height: 48px;
      border-radius: 50%;
    }

    .spells,
    .runes {
      width: 22px;
      height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .spells {
      margin-left: 4px;

      .spell-icon {
        border-radius: 4px;
      }
    }

    .runes {
      margin-left: 2px;

      .rune-icon {
        border-radius: 50%;
      }
    }
  }

  .kda {
    margin: 0 8px 0 12px;
    width: 119px;
    border-right: 1px solid #d5e3ff1a;
  }

  .death {
    color: #e84057;
  }

  .slash {
    color: #7b7a8e;
  }

  .second-line {
    display: flex;
    margin-top: 8px;

    .most-kill-badge {
      height: 18px;
      padding: 0px 8px;
      margin-left: 8px;
      border-radius: 9px;
      background-color: #e84057;
    }

    .mvp-badge {
      height: 18px;
      padding: 0px 8px;
      margin-left: 4px;
      border-radius: 9px;
      background-color: #eb9c00;
    }
  }
`

const GameParticipantsWrapper = styled.div`
  min-width: 184px;
  margin-left: 12px;
  height: 96px;

  display: flex;
  align-items: center;

  .wrap {
    display: flex;
    gap: 8px;
  }

  .summoner-wrap {
    width: 88px;
    display: flex;
    gap: 4px;
    margin-bottom: 1px;

    .icon {
      background-color: skyblue;
      width: 16px;
      height: 16px;
    }

    &:last-child {
      margin-bottom: 0px;
    }
    p {
      font-size: 12px;
      text-overflow: ellipsis;
      width: 60px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`

const DetailButton = styled.button<{ isWin: boolean; isShowDetail: boolean }>`
  cursor: pointer;
  min-width: 40px;
  border-radius: 0px 4px 4px 0px;
  background-color: ${({ isWin }) => (isWin ? main[200] : red[200])};
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;

  svg {
    ${({ isShowDetail }) => isShowDetail && 'transform:rotate(180deg)'};
  }

  &:hover {
    background-color: ${({ isWin }) => (isWin ? main[100] : red[100])};
  }
`
// const GameInfoWrapper = styled.div``

export default HistoryCard
