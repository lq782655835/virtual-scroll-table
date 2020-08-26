import Vue from 'vue'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import './index.css'

export default {
  name: 'virtual-scroll-table',
  props: {
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    disabled: { type: Boolean, default:false },
    maxHeight: { type: Number, default: 200 },
    loading: { type: Boolean, default: false },
  },
  methods: {
    loadMore () {
      this.$emit('loadMore')
    }
  },
  render () {
    const directives = [
      {
        name: 'infinite-scroll',
        value: () => this.loadMore()
      }
    ]

    const scopedSlots = {
      default: ({ item: row, index }) => {
        return (
          <div class="tr">
            {
              this.columns.map((col) => {
                const { key, customRender, width } = col
                const val = row[key]
                let vnode = val
                if (customRender) {
                  vnode = customRender(val, row, index, col)
                }
                return <span class="td" key={key} style={{ maxWidth: width + 'px' }}>{vnode}</span>
              })
            }
          </div>
        )
      }
    }

    const renderHeader = () => {
      return (
        <div class="m-virtual-table-thead">
          <div class="tr">
            {
              this.columns.map((th) => {
                let { key, title, width } = th
                title = typeof title === 'function' ? title() : title
                return (
                  <span class="th" key={`header-${key}`} style={{ maxWidth: width + 'px' }}>{title}</span>
                )
              })
            }
          </div>
        </div>
      )
    }

    return (
      <div class="m-virtual-table">
        { renderHeader() }
        {
          this.data.length ? <RecycleScroller
            class="m-virtual-table-body"
            style={{ maxHeight: this.maxHeight + 'px' }}
            items={this.data}
            infinite-scroll-disabled={this.disabled}
            infinite-scroll-immediate-check="false"
            infinite-scroll-distance="0"
            scopedSlots={scopedSlots}
            {...{ directives, props: this.$attrs }}
          /> : <a-spin spinning={this.loading}>
            <div class="ant-table-placeholder">暂无数据</div>
          </a-spin>
        }
      </div>
    )
  }
}
