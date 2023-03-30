<template>
  <h3>坐标位置为：x：{{ position.x }}，y：{{ position.y }}</h3>
</template>

<script>
import usePosition from '../hooks/usePosition'
export default {
  setup() {
    const position = usePosition()

    return {
      position
    }
  }
}
</script>