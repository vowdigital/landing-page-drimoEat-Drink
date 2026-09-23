export const links = {
  menu: 'https://drimo-eat-drink.goomer.app/menu',
  delivery: 'https://drimo-eat-drink.goomer.app/menu',
  whatsapp: 'https://api.whatsapp.com/send?phone=5567996182583',
  instagram: 'https://www.instagram.com/drimodourados',
  maps: '',
} as const

export const whatsappMessages = {
  reservation: 'Olá! Vim pelo site da Drimo Eat & Drink e gostaria de fazer uma reserva.',
  information: 'Olá! Vim pelo site da Drimo Eat & Drink e gostaria de mais informações.',
  weeklyAction: (action: string) =>
    `Olá! Vim pelo site da Drimo Eat & Drink e gostaria de saber mais sobre ${action}.`,
} as const

export function buildWhatsappLink(message: string) {
  const url = new URL(links.whatsapp)
  url.searchParams.set('text', message)
  return url.toString()
}
