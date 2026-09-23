import { links } from './links'

export interface RestaurantConfig {
  name: string
  city: string
  address?: string
  hours: string[]
  phone: string
  instagram: string
  menu: string
  whatsapp: string
  maps?: string
  canonical?: string
}

export const restaurant: RestaurantConfig = {
  name: 'Drimo Eat & Drink',
  city: 'Dourados/MS',
  address: 'R. Horizonte, 145 - Dourados, MS, 79800-000 - Drimo Sport Club',
  hours: [],
  phone: '(67) 99618-2583',
  instagram: links.instagram,
  menu: links.menu,
  whatsapp: links.whatsapp,
  maps: 'https://www.google.com/maps?q=Drimo+Sport+Club,+R.+Horizonte,+145,+Dourados,+MS,+79800-000&output=embed',
  canonical: undefined,
}
