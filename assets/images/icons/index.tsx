import IconSearch from './icon-search.svg'
import IconArrowDown from './icon-arrow-down.svg'
import IconBaron from './icon-baron.svg'
import IconDragon from './icon-dragon.svg'
import IconTower from './icon-tower.svg'

export const IconSearchSvg = () => {
  return <IconSearch />
}

export const IconArrowDownSvg = ({ fill }: { fill: string }) => {
  return <IconArrowDown fill={fill} />
}

export const IconBaronSvg = ({ fill }: { fill: string }) => {
  return <IconBaron fill={fill} />
}

export const IconDragonSvg = ({ fill }: { fill: string }) => {
  return <IconDragon fill={fill} />
}

export const IconTowerSvg = ({ fill }: { fill: string }) => {
  return <IconTower fill={fill} />
}
