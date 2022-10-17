import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../elements'

const HistoryCard = () => {
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
              <Image
                className="champ-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/opzz.back/champIcon/Aatrox.png"
                alt="champ"
                width="48"
                height="48"
              />
              <div className="champ-level">
                <Text size="10px" color="#FFF">
                  11
                </Text>
              </div>
            </div>
            <div className="spells">
              <Image
                className="spell-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/opzz.back/champIcon/Aatrox.png"
                alt="champ"
                width="22"
                height="22"
                layout="responsive"
              />
              <Image
                className="spell-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/opzz.back/champIcon/Aatrox.png"
                alt="champ"
                width="22"
                height="22"
                layout="responsive"
              />
            </div>
            <div className="runes">
              <Image
                className="rune-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/opzz.back/champIcon/Aatrox.png"
                alt="champ"
                width="22"
                height="22"
                layout="responsive"
              />
              <Image
                className="rune-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/opzz.back/champIcon/Aatrox.png"
                alt="champ"
                width="22"
                height="22"
                layout="responsive"
              />
            </div>
          </div>
          <div className="kda">
            <Text size="15px" weight="bold" color="#FFF">
              2 <span className="slash">/</span> <span className="death">4</span> <span className="slash">/</span> 9
            </Text>
            <Text size="12px" color="#7b7a8e">
              2.75:1 평점
            </Text>
          </div>
        </div>
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
  background-color: red;
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
