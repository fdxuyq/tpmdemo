<template>
  <div>
    {{ data.type }}
  </div>
</template>

<script>

export default {
  name: 'FilterContent',
  props: {
    data: {
      type: Object,
      default: () => ({ type: ''}),
    },
  }
}
</script>
