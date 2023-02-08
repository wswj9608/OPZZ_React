import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Text } from '@/elements'
import { useRouter } from 'next/router'
import { getSubPerkIcon } from '@/assets/images/subPerkIcons'
import { main, red } from '@/styles/palette'

const HistoryCard = ({ match }: HistoryCardProps) => {
  const { query } = useRouter()
  const { summonerName } = query
  const { gameDuration, gameDatas, gameEndTimestamp } = match
  const {
    champion,
    champLevel,
    summonerSpells,
    kills,
    deaths,
    assists,
    win,
    subPerkStyleId,
    primaryPerkId,
    status,
    kda,
    teamId,
    items,
    mostMultiKills,
  } = match.gameDatas.find(data => data.summonerName === summonerName) as GameDataType

  const { killParticipationRate, minionsPerMinute, totalMinionsKilled, visionWardsBoughtInGame } = status

  const getPrimaryPerk = (perkId: number) => {
    return match.primaryPerks?.find(perk => perk.perk_id === perkId)
  }

  const COMMUNITY_DRAGON_URL = 'https://raw.communitydragon.org/12.19/plugins/rcp-be-lol-game-data/global/default/v1'
  const primery = getPrimaryPerk(primaryPerkId)?.icon_path.split('v1')[1].toLowerCase()

  // const blueTeam = match.gameDatas.find(data => data.teamId === 100)
  // const purpleTeam = match.gameDatas.find(data => data.teamId === 100)

  console.log(match.gameDatas.find(data => data.summonerName === summonerName))
  // console.log(blueTeam)

  return (
    <HistoryCardWrapper isWin={win}>
      <GameInfoWrapper>
        <div className="wrap">
          <div>
            <Text color={win ? '#5383e8' : '#e84057'} weight="bold">
              자유 5:5랭크
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
                <div className="champ-icon" />
                {/* <Image className="champ-icon" src={champion.image_url} alt="champ" width="48" height="48" /> */}
                <div className="champ-level">
                  <Text size="10px" color="#FFF">
                    {champLevel}
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
                  src={(COMMUNITY_DRAGON_URL + primery) as string}
                  alt="champ"
                  width="22"
                  height="22"
                  layout="responsive"
                />
                <Image
                  className="rune-icon"
                  src={getSubPerkIcon(subPerkStyleId)}
                  alt="champ"
                  width="22"
                  height="22"
                  layout="responsive"
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
                {`킬관여 ${killParticipationRate}%`}
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
            <ItemsWrapper>
              {items.map((item, idx) => {
                if (!item) return <Item isWin={win} key={idx} />

                return (
                  <Item isAccessaryItem={idx === items.length - 1} isWin={win} key={idx}>
                    <Image src={item.image_url} alt="item" width={22} height={22} />
                  </Item>
                )
              })}
            </ItemsWrapper>
            {mostMultiKills && (
              <div className="most-kill-badge">
                <Text color="#FFF">{mostMultiKills}</Text>
              </div>
            )}
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
            {gameDatas.map((data, idx) => {
              if (data.teamId === 100) {
                const isSearchUser = data.summonerName === summonerName

                return (
                  <div className="summoner-wrap" key={idx}>
                    <div className="icon" />
                    {/* <Image
                      style={{ borderRadius: '4px' }}
                      src={data.champion.image_url}
                      alt="champ"
                      width={16}
                      height={16}
                    /> */}
                    <div className="summoner-name">
                      <Text color={isSearchUser ? '#FFF' : '#9e9eb1'}>{data.summonerName}</Text>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div>
            {gameDatas.map((data, idx) => {
              if (data.teamId === 200) {
                const isSearchUser = data.summonerName === summonerName

                return (
                  <div className="summoner-wrap" key={idx}>
                    {/* <Image
                      style={{ borderRadius: '4px' }}
                      src={data.champion.image_url}
                      alt="champ"
                      width={16}
                      height={16}
                    /> */}
                    <div className="icon" />
                    <Text color={isSearchUser ? '#FFF' : '#9e9eb1'}>{data.summonerName}</Text>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </GameParticipantsWrapper>
      <DetailButton isWin={win}></DetailButton>
    </HistoryCardWrapper>
  )
}

const HistoryCardWrapper = styled.div<{ isWin: boolean }>`
  width: 100%;
  background-color: lightcoral;
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
      background-color: papayawhip;
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

const ItemsWrapper = styled.div`
  display: flex;
  gap: 2px;
`

const Item = styled.div<{ isAccessaryItem?: boolean; isWin?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: ${({ isAccessaryItem }) => (isAccessaryItem ? '50%' : '4px')};
  background-color: ${({ isWin }) => (isWin ? '#2f436e' : '#703c47')};
  overflow: hidden;
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

const DetailButton = styled.button<{ isWin: boolean }>`
  min-width: 40px;
  border-radius: 0px 4px 4px 0px;
  background-color: ${({ isWin }) => (isWin ? '#2f426e' : '#703c47')};
`
// const GameInfoWrapper = styled.div``

export default HistoryCard
