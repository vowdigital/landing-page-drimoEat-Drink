import logoLight from '../assets/drimo/logo/Drimo-logo.png'
import logoDark from '../assets/drimo/logo/Drimo-marketing.png'
import heroImage from '../assets/drimo/parmegiana.jpg'
import heroImageAlt from '../assets/drimo/parmegiana-2.jpg'
import parmegianaDetailImage from '../assets/drimo/parmegiana-3.jpg'
import chefContextImage from '../assets/drimo/chef-6655.jpg'
import chefDetailImage from '../assets/drimo/chef-6657.jpg'
import chefProfessionalImage from '../assets/drimo/chef-6678.jpg'
import drinkImage from '../assets/drimo/drink.jpg'
import tercaDelasImage from '../assets/drimo/terca-delas-6682.jpg'
import assadosImage from '../assets/drimo/festival-assados-8535.jpg'
import quintaVinhoImage from '../assets/drimo/quinta-vinho-8837.jpg'
import pratoFileImage from '../assets/drimo/prato-file-8755.jpg'
import pratoPeixeImage from '../assets/drimo/prato-peixe-4644.jpg'
import ambienteImage from '../assets/drimo/ambiente-4315.jpg'
import assadoVariedadeImage from '../assets/drimo/assado-variedade-8488.jpg'
import petiscosImage from '../assets/drimo/petiscos-6653.jpg'
import rischeLight from '../assets/drimo/fonts/Rische-Light.woff2'
import rischeRegular from '../assets/drimo/fonts/Rische-Regular.woff2'
import rischeMedium from '../assets/drimo/fonts/Rische-Medium.woff2'
import rischeSemibold from '../assets/drimo/fonts/Rische-Semibold.woff2'
import rischeBold from '../assets/drimo/fonts/Rische-Bold.woff2'

/** Curadoria de fotografias oficiais baixadas do Drive, separadas por uso para evitar repetiÃ§Ã£o visual. */
export const drimoAssets = {
  logoLight,
  logoDark,
  favicon: logoDark,
  hero: heroImage,
  about: ambienteImage,
  sharing: assadosImage,
  delivery: parmegianaDetailImage,
  chefDiego: chefProfessionalImage,
  experience: chefDetailImage,
  finalCta: drinkImage,
  menu: {
    contemporary: pratoFileImage,
    sharing: assadoVariedadeImage,
    parmegiana: heroImage,
    burgers: pratoPeixeImage,
    snacks: petiscosImage,
    drinks: tercaDelasImage,
  },
  weekly: {
    tercaDelas: tercaDelasImage,
    parmegiana: heroImageAlt,
    wine: quintaVinhoImage,
    happyHour: drinkImage,
    feijoada: assadoVariedadeImage,
    weekend: assadosImage,
    confraria: undefined as string | undefined,
  },
  gallery: {
    dishes: pratoFileImage,
    drinks: drinkImage,
    environment: ambienteImage,
    chef: chefProfessionalImage,
    experience: quintaVinhoImage,
    behindScenes: chefContextImage,
  },
} as const

export const drimoFonts = { rischeLight, rischeRegular, rischeMedium, rischeSemibold, rischeBold } as const
