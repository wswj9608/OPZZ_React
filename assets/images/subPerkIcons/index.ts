import domination from './8100.png'
import inspiration from './8300.png'
import precision from './8000.png'
import resolve from './8400.png'
import sorcery from './8200.png'
import { StaticImageData } from 'next/image'

export const getSubPerkIcon = (perkId: number) => {
  if (perkId === 8100) return domination
  if (perkId === 8300) return inspiration
  if (perkId === 8000) return precision
  if (perkId === 8400) return resolve
  return sorcery
}
