<template>
	<div>
		<p>Hello from pageHome</p>
		<div v-for="thread in threads" :key="thread.id">
			<h1>{{thread.title}}</h1>
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{userById(postById(postId).userId).name}}</p>
        <p>{{postById(postId).text}}</p>
      </div>
		</div>
	</div>
</template>

<script setup>
import sourceData from '@/data.json'
// utility function for reactive data
// reactive function is only user for object and arrays, for booleans, strings, etc. ref is used
// when working with ref, you must use .value to access data
import { ref } from 'vue'

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

function postById (postId) {
  return posts.value.find(p => p.id === postId)
}
function userById (postId) {
  return users.value.find(u => u.id === postId)
}

</script>

<style scoped>

</style>
