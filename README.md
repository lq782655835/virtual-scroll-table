# virtual-scroll-table ![](https://img.shields.io/badge/license-MIT-F44336.svg)

## 在线案例

https://lq782655835.github.io/virtual-scroll-table

## 特点

1. 自定义虚拟滚动table

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
```

## License

MIT
