import Image from 'next/image'
import styled from 'styled-components'
import { ItemsBoxProps } from './types'

const ItemsBox = ({ items, isWin }: ItemsBoxProps) => {
  return (
    <ItemsBoxWrapper>
      {items.map((item, idx) => {
        if (!item) return <Item isWin={isWin} key={idx} />

        return (
          <Item isAccessaryItem={idx === items.length - 1} isWin={isWin} key={idx}>
            <Image src={item.iconImageUrl} alt="item" width={22} height={22} />
          </Item>
        )
      })}
    </ItemsBoxWrapper>
  )
}

const ItemsBoxWrapper = styled.div`
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

export default ItemsBox
