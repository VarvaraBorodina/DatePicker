import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import THEME from '@/constants/theme'

import CalendarHeader from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<ThemeProvider theme={THEME}>{component}</ThemeProvider>)

describe('Days Calendar Header', () => {
  it(`Check title on screen`, async () => {
    const title = 'title'
    const withArrow = true
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = false
    const prevDisable = true
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it(`Check with arrows`, async () => {
    const title = 'title'
    const withArrow = true
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = false
    const prevDisable = true
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it(`Check without arrows`, async () => {
    const title = 'title'
    const withArrow = false
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = false
    const prevDisable = true
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it(`Check next arrow active`, async () => {
    const title = 'title'
    const withArrow = true
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = false
    const prevDisable = true
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    const button = screen.queryAllByRole('button')[1]
    fireEvent.click(button)
    expect(onNext).toHaveBeenCalled()
  })

  it(`Check next arrow disable`, async () => {
    const title = 'title'
    const withArrow = true
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = true
    const prevDisable = true
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    const button = screen.queryAllByRole('button')[1]
    fireEvent.click(button)
    expect(onNext).not.toHaveBeenCalled()
  })

  it(`Check prev arrow active`, async () => {
    const title = 'title'
    const withArrow = true
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = false
    const prevDisable = false
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    const button = screen.queryAllByRole('button')[0]
    fireEvent.click(button)
    expect(onPrev).toHaveBeenCalled()
  })

  it(`Check next arrow disable`, async () => {
    const title = 'title'
    const withArrow = true
    const onNext = jest.fn()
    const onPrev = jest.fn()
    const nextDisable = true
    const prevDisable = true
    render(
      <CalendarHeader
        title={title}
        withArrows={withArrow}
        onNext={onNext}
        onPrevious={onPrev}
        nextDisable={nextDisable}
        prevDisable={prevDisable}
      />
    )

    const button = screen.queryAllByRole('button')[0]
    fireEvent.click(button)
    expect(onPrev).not.toHaveBeenCalled()
  })
})
