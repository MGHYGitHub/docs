<template>
  <div class="busuanzi-wrapper">
    <div class="busuanzi-item">
      本站总访问量 <span id="busuanzi_value_site_pv" /> 次
    </div>
    <div class="busuanzi-item">
      本站访客数 <span id="busuanzi_value_site_uv" /> 人次
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import busuanzi from 'busuanzi.pure.js'

onMounted(() => {
  busuanzi.fetch()
})
</script>

<style scoped>
.busuanzi-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.busuanzi-item {
  margin: 5px 0;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

.busuanzi-item span {
  color: #42b983;
}
</style>