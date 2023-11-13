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

<script>
import sourceData from '@/data.json'
export default {
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (postId) {
      return this.users.find(u => u.id === postId)
    }
  }
}

</script>

<style scoped>

</style>
