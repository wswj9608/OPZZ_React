import { perkIcons } from '@/assets/images/perkIcons'
import { blue, gray, orange, teal } from '@/styles/palette'

export const COMMUNITY_DRAGON_URL =
  'https://raw.communitydragon.org/12.19/plugins/rcp-be-lol-game-data/global/default/v1'

export const perkIcon = (perkId: number) => {
  return perkIcons[perkId]
}

export const getPercentage = (a: number, b: number) => {
  return Math.round((a / (a + b)) * 100)
}

export const kdaColor = (kda: number) => {
  if (kda < 3) return gray[600]
  if (kda < 4) return teal[600]
  if (kda < 5) return blue[600]
  return orange[600]
  // return teal[600]
}
