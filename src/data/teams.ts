import { TeamType } from 'components/Team/Team'

const items: TeamType[] = [
  {
    name: 'Илья',
    position: 'Генеральный директор',
    link: 'https://wa.me/79537397482',
  },
  {
    name: 'Камилла',
    position: 'Руководитель отдела по работе с клиентами',
    link: 'https://wa.me/79109086232',
  },
  {
    name: 'Дмитрий',
    position: 'Главный автоэлектрик',
  },
]

const teams = {
  title: 'Наша команда',
  items,
}

export default teams
