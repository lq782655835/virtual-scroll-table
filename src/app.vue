<template>
  <div id="app">
      <virtual-scroll-table
        :columns="columns"
        :data="list"
        key-field="id"
        :item-size="45"
        :maxHeight="2 * 45"
        @loadMore="loadMore"
      />
  </div>
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  name: "app",
  data() {
    return {
      list: Array(100)
        .fill('')
        .map((_, index) => ({id: index, name: 'name' + index, gmtCreate: Date.now().toString()})), // listData,
      columns: [
        { title: 'ID', key: 'id', width: '80px' },
        { title: '邮箱', key: 'name' },
        { title: '创建时间', key: 'gmtCreate' },
        { title: '操作', key: 'handle',
          customRender: (val, row, column, index) => {
            return (<div>
              <a-button type="primary" onClick={() => this.detailHandle(row)}>查看详情</a-button>
              <a-button type="danger" onClick={() => this.delHandle(row)}>删除</a-button>
            </div>)
          }
        }
      ]
    };
  },
  methods: {
    loadMore() {
      console.log('page + 1')
    }
  }
};
</script>
