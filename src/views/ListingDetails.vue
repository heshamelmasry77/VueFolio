<template>
  <div>Listing Details</div>
  <h2>the param value is : {{ $route.params.id }}</h2>
</template>

<script>
export default {
  computed: {
    postId() {
      return parseInt(this.$route.params.id)
    }
  }
}

</script>