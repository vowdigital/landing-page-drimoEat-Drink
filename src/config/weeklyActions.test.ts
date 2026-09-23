import { describe, expect, it } from 'vitest'
import { visibleWeeklyActions, weeklyActions } from './weeklyActions'

describe('weekly actions', () => {
  it('keeps actions in priority order and filters inactive non-coming-soon entries', () => {
    expect(visibleWeeklyActions.map((action) => action.priority)).toEqual([...visibleWeeklyActions.map((action) => action.priority)].sort((a, b) => a - b))
    expect(visibleWeeklyActions.every((action) => action.active || action.comingSoon)).toBe(true)
  })

  it('keeps Menu Confraria available as an explicit coming-soon entry', () => {
    const confraria = weeklyActions.find((action) => action.id === 'menu-confraria')
    expect(confraria).toMatchObject({ active: false, comingSoon: true })
    expect(confraria?.ctaUrl).toBeUndefined()
  })

  it('centralizes the known weekend price', () => {
    expect(weeklyActions.find((action) => action.id === 'feijoada')?.price).toBe('R$ 89,90 por pessoa')
  })
})
