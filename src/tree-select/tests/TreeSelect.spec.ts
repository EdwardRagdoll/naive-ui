import { mount } from '@vue/test-utils'
import { NTreeSelect, TreeSelectOption } from '../index'

describe('n-tree-select', () => {
  it('should work with import on demand', () => {
    mount(NTreeSelect)
  })
  it('should accept proper options', () => {
    mount(NTreeSelect, {
      props: {
        options: [
          {
            label: '1',
            key: '1'
          }
        ]
      }
    })
    const options: TreeSelectOption[] = [
      {
        label: '1',
        key: '1',
        gogogo: '12'
      }
    ]
    mount(NTreeSelect, {
      props: {
        options
      }
    })
  })
  it('should show all path when set showPath', async () => {
    const wrapper = mount(NTreeSelect, {
      props: {
        options: [
          {
            label: '1',
            key: '1',
            children: [
              {
                label: '1-1',
                key: '1-1'
              },
              {
                label: '1-2',
                key: '1-2'
              }
            ]
          }
        ],
        showPath: true,
        defaultValue: '1-2'
      }
    })
    expect(wrapper.find('.n-base-selection-label__input').exists()).toBe(true)
    expect(wrapper.find('.n-base-selection-label__input').text()).toBe(
      '1 / 1-2'
    )

    await wrapper.setProps({ showPath: false })
    expect(wrapper.find('.n-base-selection-label__input').exists()).toBe(true)
    expect(wrapper.find('.n-base-selection-label__input').text()).toBe('1-2')

    await wrapper.setProps({
      showPath: true,
      defaultValue: '1-1',
      separator: ' | '
    })
    expect(wrapper.find('.n-base-selection-label__input').exists()).toBe(true)
    expect(wrapper.find('.n-base-selection-label__input').text()).toBe(
      '1 | 1-2'
    )
  })
})
