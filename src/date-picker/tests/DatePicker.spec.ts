import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { NDatePicker } from '../index'
import { Value } from '../src/interface'

describe('n-date-picker', () => {
  it('should work with import on demand', () => {
    mount(NDatePicker).unmount()
  })
  it('date type should work with shortcuts prop', async () => {
    const test = ref<Value>(0)
    const wrapper = mount(NDatePicker, {
      props: {
        value: test.value,
        type: 'date',
        onUpdateValue: (value: Value) => { test.value = value },
        shortcuts: {
          'Honey birthday': 1631203200000
        }
      }
    })
    await wrapper.find('.n-input').trigger('click')
    const button: HTMLElement = document.querySelector('.n-date-panel-actions')?.querySelector('.n-button') as HTMLElement
    button.click()
    expect(test.value).toEqual(1631203200000)
    test.value = 0
    wrapper.setProps({
      type: 'datetime'
    })
    await wrapper.find('.n-input').trigger('click')
    const timeButton: HTMLElement = document.querySelector('.n-date-panel-actions')?.querySelector('.n-button') as HTMLElement
    timeButton.click()
    expect(test.value).toEqual(1631203200000)
    wrapper.unmount()
  })
  it('range type should work with shortcuts prop', async () => {
    const test = ref<Value>(0)
    const wrapper = mount(NDatePicker, {
      props: {
        value: test.value,
        type: 'daterange',
        onUpdateValue: (value: Value) => { test.value = value },
        shortcuts: {
          'Honey birthday': [1629216000000, 1631203200000]
        }
      }
    })
    await wrapper.find('.n-input').trigger('click')
    const button: HTMLElement = document.querySelector('.n-date-panel-actions')?.querySelector('.n-button') as HTMLElement
    button.click()
    expect(test.value).toEqual([1629216000000, 1631203200000])
    test.value = 0
    wrapper.setProps({
      type: 'datetimerange'
    })
    await wrapper.find('.n-input').trigger('click')
    const rangeButton: HTMLElement = document.querySelector('.n-date-panel-actions')?.querySelector('.n-button') as HTMLElement
    rangeButton.click()
    expect(test.value).toEqual([1629216000000, 1631203200000])
    wrapper.unmount()
  })
})
