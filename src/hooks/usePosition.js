import { onMounted, onUnmounted, reactive } from 'vue'

export default function() {
  let position = reactive({
    x: 0,
    y: 0
  })

  const listener = function(event) {
    position.x = event.pageX
    position.y = event.pageY
  }

  onMounted(() => {
    window.addEventListener('click', listener)
  })

  onUnmounted(() => {
    window.removeEventListener('click', listener)
  })

  return position
}