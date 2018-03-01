<template>
  <div>
    {{ data.type }}
  </div>
</template>

<script>

export default {
  name: 'TooltipContent',
  props: {
    data: {
      type: Object,
      default: () => ({ type: ''}),
    },
  }
}
</script>
