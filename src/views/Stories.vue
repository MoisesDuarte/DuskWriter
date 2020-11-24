<template>
  <main>
    <header>
      <span>DuskWriter</span>
      <button class="transparent">+ Add Story</button>
    </header>

    <section v-for="story in stories" :key="story.id">
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

    <p class="no-more">This is all for now</p>
    
    <img class="bottom-left" src="@/assets/svg/sunset_illustration.svg" alt="">

  </main>
</template>

<script>
export default {
  name: 'Stories',
  data() {
    return {
      stories: [
        { 
          id: 0,
          title: 'Story One',
          date: '12/05/2020',
          words: 2567,
          characters: 4614,
          reading_time: '23 minutes',
        },
        { 
          id: 1,
          title: 'Story Two',
          date: '12/07/2018',
          words: 5454,
          characters: 6871,
          reading_time: '32 minutes',
        },
        { 
          id: 2,
          title: 'Story Three',
          date: '12/05/2020',
          words: 6545,
          characters: 24554,
          reading_time: '1 hour',
        },
      ],
    }
  },
}
</script>

<style scoped>
main {
  position: relative;
  height: 100%;
}

img.bottom-left {
  position: absolute;
  left: 0;
  bottom: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Wendy One', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 1rem;
}

header > span {
  color: var(--color-primary)
}

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

p.no-more {
  color: var(--color-primary);
  font-family: 'Wendy One', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
}
</style>