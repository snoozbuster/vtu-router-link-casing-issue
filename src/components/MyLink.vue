<template>
  <RouterLink class="link" :to="{ name: name }">
    <slot>
      A test link
    </slot>
  </RouterLink>
</template>

<script>
export default {
  name: "MyLink",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
