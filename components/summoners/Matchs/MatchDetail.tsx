import { Text } from '@/elements'
import styled from 'styled-components'
import ItemsBox from './ItemsBox'

const MatchDetail = () => {
  return (
    <DetailWrapper>
      <div className="header"></div>
      <div className="champ">
        <div className="icon" />
        <div className="level" />
      </div>
      <div className="spells">
        <div className="spell-icon" />
        <div className="spell-icon" />
      </div>
      <div className="runes">
        <div className="rune-icon" />
        <div className="rune-icon" />
      </div>
      <div className="summoner">
        <Text>한우종</Text>
        <Text>Gold 2</Text>
      </div>
      <div className="score">
        <Text>7.6</Text>
        <Text>MVP</Text>
      </div>
      <div className="kda">
        <Text>10 / 1 / 1 (40%)</Text>
        <Text>10.0 : 1</Text>
      </div>
      <div className="damage">
        <div>
          <Text>11111</Text>
          <div className="bar" />
        </div>
        <div>
          <Text>11111</Text>
          <div className="bar" />
        </div>
      </div>
      <div className="ward">
        <Text>0</Text>
        <Text>7 / 1</Text>
      </div>
      <div className="cs">
        <Text>138</Text>
        <Text>분당 1.5</Text>
      </div>
      <div className="items">{/* <ItemsBox /> */}</div>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div``

export default MatchDetail
