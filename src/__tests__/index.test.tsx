/**
 * Created by tony on 2019/12/30
 */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Component from '../Main'

test('fist test', async () => {
  const onChange = jest.fn()
  const { getByText } = render(<Component onChange={onChange} />)
  fireEvent.click(getByText('Main'))
  expect(onChange).toHaveBeenCalled()
})
