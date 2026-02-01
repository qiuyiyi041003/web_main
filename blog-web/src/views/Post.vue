<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <div v-html="post.content"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const post = ref(null)
const route = useRoute()

onMounted(async () => {
  const res = await axios.get(`/api/posts/${route.params.id}`)
  post.value = res.data
})
</script>
