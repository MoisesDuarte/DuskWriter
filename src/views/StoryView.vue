<template>
  <main>
    <header>
      <input v-model="title" class="transparent" type="text">
    </header>

    <section>
      <textarea v-model="body" class="transparent"></textarea>
    </section>

    <footer>
      <span>{{ wordCount }} words</span>
      <span>{{ body.length }} characters</span>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'StoryView',
  computed: {
    wordCount() {
      return this.body.split(" ").length;
    }
  },
  data() {
    return {
      title: 'Title',
      body: 'Hello World!',
    }
  },
}
</script>

<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
}

main > header {
  text-align: center;
}

main > section {
  flex: 1;
}

main > footer {
  display: flex;
  justify-content: space-between;
  color: var(--color-accent);
  padding: 1rem;
}
</style>