import { Plus } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const questions = [
  { question: 'Preciso fazer reserva?', answer: 'A reserva não é obrigatória em todos os momentos, mas pode ajudar a organizar sua visita. Fale com a equipe pelo WhatsApp para consultar a disponibilidade.' },
  { question: 'Como faço um pedido para delivery?', answer: 'Acesse o cardápio online, escolha seus pratos e finalize o pedido diretamente pela plataforma Goomer.' },
  { question: 'O cardápio está disponível online?', answer: 'Sim. O cardápio atualizado pode ser acessado pelos botões “Ver cardápio” ao longo da página.' },
  { question: 'A Drimo possui pratos para compartilhar?', answer: 'Sim. Há opções pensadas para dividir a mesa em diferentes momentos. Consulte o cardápio para conhecer as opções atuais.' },
  { question: 'Quais são as ações da semana?', answer: 'A programação reúne ações como Terça Delas, Festival de Parmegiana, Quinta do Vinho, Happy Hour e festivais de fim de semana. As condições podem mudar.' },
  { question: 'Como acompanho a programação atual?', answer: 'Consulte a seção de programação desta página e acompanhe o Instagram oficial da Drimo para as novidades.' },
  { question: 'Posso entrar em contato pelo WhatsApp?', answer: 'Sim. Você pode falar com a equipe para tirar dúvidas, consultar a programação ou solicitar uma reserva.' },
]

export function FAQ() {
  return (
    <section className="section faq">
      <div className="shell faq__grid">
        <div data-reveal><SectionHeading eyebrow="Perguntas frequentes" title="Tudo para aproveitar a sua experiência." /></div>
        <div className="faq__list" data-reveal>
          {questions.map((item) => <details key={item.question}><summary><span>{item.question}</span><Plus aria-hidden="true" /></summary><p>{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  )
}
