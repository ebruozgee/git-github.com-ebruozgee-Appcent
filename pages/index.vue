<template>
<div>
  <HomepageBanner />
<div>
   <span class="title">Popüler Filmler</span> 
    <hr/>
</div>
  <div>

    <HomepagePopularMovie :pop="pop.results"/>
  </div>
  <div>
  </div>
</div>
</template>

<script>
export default {

  data(){
    return{
      pop : [],
    }
  },
  mounted(){
    fetch('https://api.themoviedb.org/3/discover/movie?language=tr-TR&sort_by=popularity.desc&api_key=e5594e8b42419b59e585e4281dc05f9e')
    .then(res => res.json())
    .then(data => this.pop = data)
  }
}
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 500;
  font-size: 25px;
  color: #23272b;
  letter-spacing: 0.5px;
  margin-left: 50px;
  margin-top: 15px;
}
</style>