# virtual-scroll-table ![](https://img.shields.io/badge/license-MIT-F44336.svg)

无限下拉虚拟滚动table组件

## 在线案例

https://lq782655835.github.io/virtual-scroll-table

## 特点

1. 原生实现table，不依赖任何组件库，并使用[antdv](https://antdv.com/components/table-cn/) API组织table
1. 使用`vue-virtual-scroller`进行虚拟滚动
1. 内置`vue-infinite-scroll`进行无限下拉加载

## 安装和引入

安装
``` bash
yarn add @springleo/virtual-scroll-table
```

引入

``` js
import VirtualScrollTable from '@springleo/virtual-scroll-table'
Vue.use(VirtualScrollTable)
```

## 基本使用

``` html
<template>
    <virtual-scroll-table
      :columns="columns"
      :data="list"
      key-field="id"
      :item-size="45"
      :maxHeight="2 * 45"
      @loadMore="loadMore"
    />
</template>
<script>
export default {
  data() {
    return {
      page: 2,
      list: Array(2 * 10)
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
```

## API说明

### columns/data

表格配置相关props：

* columns: 表格列的配置描述,规则类似[antdv](https://antdv.com/components/table-cn/)
* data: 数据数组

### keyField/itemSize/maxHeight

虚拟item相关props：
* keyField: 唯一item项的key字段，比如id
* itemSize: 每个item固定的高度
* maxHeight: 整个table-body最大的高度

### loadMore事件

触底时自动加载更多数据时的回调


## Vue plugin series

| Plugin | Status | Description |
| :---------------- | :-- | :-- |
| [@springleo/el-dialog-helper](https://github.com/lq782655835/el-dialog-helper) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | Promisify dialogs in Vue! |
| [@springleo/el-table-plus](https://github.com/lq782655835/el-table-plus) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | 基于el-table的配置化组件|
| [@springleo/el-form-plus](https://github.com/lq782655835/el-form-plus) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | schema form base on element-ui form |
| [@springleo/virtual-scroll-table](https://github.com/lq782655835/virtual-scroll-table) | ![](https://img.shields.io/badge/license-MIT-F44336.svg) | 无限下拉虚拟滚动table组件 |


## License

MIT
