# virtual-scroll-table

## 基本用法

:::demo
``` vue
<template>
  <div id="app">
      <virtual-scroll-table
        :columns="columns"
        :data="list"
        key-field="id"
        :item-size="45"
        :maxHeight="10 * 45"
        @loadMore="loadMore"
      />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      page: 10,
      list: Array(100)
        .fill('')
        .map((_, index) => ({id: index, name: 'name' + index, gmtCreate: Date.now().toString()})),
      columns: [
        { title: 'ID', key: 'id', width: '80px' },
        { title: '邮箱', key: 'name' },
        { title: '创建时间', key: 'gmtCreate' },
        { title: '操作', key: 'handle',
          customRender: (val, row, column, index) => {
            return (<div>
              <a type="danger" onClick={() => this.delHandle(row)}>删除</a>
            </div>)
          }
        }
      ]
    };
  },
  methods: {
    loadMore() {
      this.list = [...this.list, ...Array(10).fill('').map((_, index) => ({id: this.page * 10 + index, name: 'name' + (this.page * 10 + index), gmtCreate: Date.now().toString()}))]
      this.page += 1
    }
  }
};
</script>

```
:::