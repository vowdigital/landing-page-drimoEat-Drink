import { drimoAssets } from './assets'
import { buildWhatsappLink, whatsappMessages } from './links'

export interface WeeklyAction {
  id: string
  day: string
  title: string
  shortDescription: string
  description: string
  image?: string
  price?: string
  badge?: string
  active: boolean
  comingSoon: boolean
  ctaLabel?: string
  ctaUrl?: string
  priority: number
  details?: string[]
}

export const weeklyActions: WeeklyAction[] = [
  {
    id: 'terca-delas',
    day: 'Terça-feira',
    title: 'Terça Delas',
    shortDescription: 'Drink em dobro para mulheres durante a noite.',
    description: 'Uma noite para brindar, conversar e aproveitar a Drimo com companhia.',
    image: drimoAssets.weekly.tercaDelas,
    badge: 'Drink em dobro',
    active: true,
    comingSoon: false,
    ctaLabel: 'Reservar mesa',
    ctaUrl: buildWhatsappLink(whatsappMessages.weeklyAction('a Terça Delas')),
    priority: 1,
  },
  {
    id: 'festival-parmegiana',
    day: 'Terça e quarta-feira',
    title: 'Festival de Parmegiana',
    shortDescription: 'Cinco opções para compartilhar entre 2 e 3 pessoas.',
    description: 'Escolha entre diferentes parmegianas, molhos e acompanhamentos para dividir a mesa.',
    image: drimoAssets.weekly.parmegiana,
    badge: 'Para compartilhar',
    active: true,
    comingSoon: false,
    ctaLabel: 'Reservar mesa',
    ctaUrl: buildWhatsappLink(whatsappMessages.weeklyAction('o Festival de Parmegiana')),
    priority: 2,
    details: [
      'Berinjela clássica italiana',
      'Filé mignon ao molho sugo ou molho branco',
      'Frango ou peixe',
      'Acompanhamentos disponíveis conforme a programação',
    ],
  },
  {
    id: 'quinta-do-vinho',
    day: 'Quinta-feira',
    title: 'Quinta do Vinho',
    shortDescription: 'Rolha livre para você levar o seu vinho.',
    description: 'Traga o seu vinho sem custo de rolha e consulte a condição vigente de sobremesa com prato principal.',
    image: drimoAssets.weekly.wine,
    badge: 'Rolha livre',
    active: true,
    comingSoon: false,
    ctaLabel: 'Reservar para quinta',
    ctaUrl: buildWhatsappLink(whatsappMessages.weeklyAction('a Quinta do Vinho')),
    priority: 3,
  },
  {
    id: 'happy-hour',
    day: 'Consulte a programação',
    title: 'Happy Hour Drimo',
    shortDescription: 'Chopp e porções para desacelerar no fim do dia.',
    description: 'Caneca de chopp Brahma por R$ 12 e porções de comida de boteco com 20% de desconto. Consulte os dias e condições atuais.',
    image: drimoAssets.weekly.happyHour,
    price: 'Chopp R$ 12',
    active: true,
    comingSoon: false,
    ctaLabel: 'Chamar no WhatsApp',
    ctaUrl: buildWhatsappLink(whatsappMessages.weeklyAction('o Happy Hour')),
    priority: 4,
    // TODO: confirmar dias definitivos do Happy Hour antes da publicação.
  },
  {
    id: 'feijoada',
    day: 'Primeiro sábado do mês',
    title: 'Feijoada',
    shortDescription: 'Buffet com mesa de antepastos e acompanhamentos.',
    description: 'Um sábado para reunir a mesa e aproveitar sabores brasileiros com calma.',
    image: drimoAssets.weekly.feijoada,
    price: 'R$ 89,90 por pessoa',
    badge: 'Fim de semana',
    active: true,
    comingSoon: false,
    ctaLabel: 'Consultar programação',
    ctaUrl: buildWhatsappLink(whatsappMessages.weeklyAction('a Feijoada')),
    priority: 5,
  },
  {
    id: 'festivais-fim-de-semana',
    day: 'Demais finais de semana',
    title: 'Festival de Filé & Assados',
    shortDescription: 'Finais de semana com opções generosas para compartilhar.',
    description: 'A programação alterna entre Festival de Filé e Festival de Assados.',
    image: drimoAssets.weekly.weekend,
    badge: 'Programação alternada',
    active: true,
    comingSoon: false,
    ctaLabel: 'Consultar programação',
    ctaUrl: buildWhatsappLink(whatsappMessages.weeklyAction('os festivais de fim de semana')),
    priority: 6,
    details: [
      'Festival de Assados: costela janela, cupim, picanha e fraldinha',
      'Festival de Filé: preparos ao molho, grelhados e parmegiana',
      'Consulte qual festival estará disponível no fim de semana',
    ],
  },
  {
    id: 'menu-confraria',
    day: 'Quintas e sábados',
    title: 'Menu Confraria',
    shortDescription: 'Uma nova experiência está sendo preparada.',
    description: 'Em breve, mais uma forma de compartilhar a mesa na Drimo.',
    image: drimoAssets.weekly.confraria,
    badge: 'Em breve',
    active: false,
    comingSoon: true,
    priority: 7,
  },
]

export const visibleWeeklyActions = weeklyActions
  .filter((action) => action.active || action.comingSoon)
  .sort((a, b) => a.priority - b.priority)
