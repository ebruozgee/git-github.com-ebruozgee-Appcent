<template>
    <div class="b-container">
        <MovieDetailsDetail :movie_details="movie_details" :id="$route.params.id"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            movie_details:[]
        }
    },
    mounted(){
    fetch('https://api.themoviedb.org/3/movie/'+this.$route.params.id+'?api_key=e5594e8b42419b59e585e4281dc05f9e&language=tr-TR')
    .then(res => res.json())
    .then(data => this.movie_details = data)
  }
}
</script>
