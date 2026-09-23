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
  address: undefined, // TODO: preencher somente após confirmação oficial.
  hours: [], // TODO: preencher somente após confirmação oficial.
  phone: '(67) 99618-2583',
  instagram: links.instagram,
  menu: links.menu,
  whatsapp: links.whatsapp,
  maps: undefined, // TODO: adicionar a URL oficial do Google Maps.
  canonical: undefined, // TODO: adicionar após a definição do domínio de produção.
}
