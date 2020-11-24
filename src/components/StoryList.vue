<template>
  <section v-for="story in stories" :key="story.id" @click="goToStoryView(story.id)">
    <h1>{{ story.title }}</h1>
    <h5>{{ story.date }}</h5>
    <article>
      <div>
        <span>{{ story.words }} words</span><br>
        <span>{{ story.characters }} characters</span>
      </div>
      <div>
        <span>{{ story.reading_time }}<br>to read</span> 
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'story-item',
  props: {
    stories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToStoryView(id) {
      this.$router.push({ name: 'StoryView', params: { story_id: id } });
    }
  }
}
</script>

<style scoped>
section {
  border-bottom: 1px solid var(--color-secondary);
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 1rem;
}

section > h1 {
  font-size: 1.5rem;
  margin-bottom: 2px;
}

section > h5 {
  color: var(--color-primary);
  font-size: 0.875rem;
  margin-top: 0;
  margin-bottom: 8px;
}

section > article {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section > article > div:first-child {
  color: var(--color-primary);
}

section > article > div:last-child {
  text-align: right;
  color: var(--color-secondary);
}
</style>