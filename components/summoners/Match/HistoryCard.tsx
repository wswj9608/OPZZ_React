import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Text } from '@/elements'
import { useRouter } from 'next/router'
import { getSubPerkIcon } from '@/assets/images/subPerkIcons'

const HistoryCard = ({ match }: HistoryCardProps) => {
  const { query } = useRouter()
  const { summonerName } = query
  const { champion, champLevel, summonerSpells, kills, deaths, assists, subPerkStyleId, primaryPerkId, kda, items } =
    match.gameDatas.find(data => data.summonerName === summonerName) as GameDataType

  const getPrimaryPerk = (perkId: number) => {
    return match.primaryPerks?.find(perk => perk.perk_id === perkId)
  }

  const COMMUNITY_DRAGON_URL = 'https://raw.communitydragon.org/12.19/plugins/rcp-be-lol-game-data/global/default/v1'
  const primery = getPrimaryPerk(primaryPerkId)?.icon_path.split('v1')[1].toLowerCase()

  console.log(match)
  console.log(COMMUNITY_DRAGON_URL + primery)

  return (
    <HistoryCardWrapper>
      <GameInfoWrapper>
        <Text>자유 5:5랭크</Text>
        <Text>하루 전</Text>
        <Text>승리</Text>
        <Text>16분 15초</Text>
      </GameInfoWrapper>
      <GamePlayDataWrapper>
        <div className="first-line">
          <div className="champion">
            <div className="champ">
              <Image className="champ-icon" src={champion.image_url} alt="champ" width="48" height="48" />
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
            <Text size="12px" color="#7b7a8e">
              {`${kda}:1 평점`}
            </Text>
          </div>
        </div>
        <ItemsWrapper>
          {items.map((item, idx) => {
            if (!item) return <Item></Item>

            return (
              <Item isAccessaryItem={idx === items.length - 1}>
                <Image src={item.image_url} alt="item" width={22} height={22} />
              </Item>
            )
          })}
        </ItemsWrapper>
      </GamePlayDataWrapper>
      <GameParticipantsWrapper />
      <DetailButton>+</DetailButton>
    </HistoryCardWrapper>
  )
}

const HistoryCardWrapper = styled.div`
  width: 100%;
  background-color: lightcoral;
  display: flex;
  height: 96px;
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: #5383e8;
  background-color: #28344e;
  box-sizing: border-box;
`

const GameInfoWrapper = styled.div`
  width: 100%;
  margin-left: 12px;
  background-color: aliceblue;
  height: 96px;
`

const GamePlayDataWrapper = styled.div`
  min-width: 377px;
  margin-left: 8px;
  /* background-color: red; */
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
    margin-left: 12px;
  }

  .death {
    color: #e84057;
  }

  .slash {
    color: #7b7a8e;
  }
`

const ItemsWrapper = styled.div`
  display: flex;
  gap: 2px;
`

const Item = styled.div<{ isAccessaryItem?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: ${({ isAccessaryItem }) => (isAccessaryItem ? '50%' : '4px')};
  background-color: #2f436e;
  overflow: hidden;
`

const GameParticipantsWrapper = styled.div`
  min-width: 184px;
  margin-left: 12px;
  background-color: papayawhip;
  height: 96px;
`

const DetailButton = styled.button`
  min-width: 40px;
  background-color: #2f426e;
`
// const GameInfoWrapper = styled.div``

export default HistoryCard
