<template>
  <div class="api">
    <h1>{{ msg }}</h1>
    <h3>Project</h3>
    <ul>
      <li><a href="" target="_blank" rel="noopener">Project Add</a></li>
    </ul>
    <h3>TimeTrackingEntry</h3>
    <ul>
      <li><a href="" target="_blank" rel="noopener">Task Add</a></li>
    </ul>
    <h3>Task</h3>
    <ul>
      <li><a href="" target="_blank" rel="noopener">Time Entry Add</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'API',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
