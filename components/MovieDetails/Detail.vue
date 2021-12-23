<template>
    <div>
        <div class="w-100 h-auto p-4 mt-4" style="background-color:#e3e8ec;"> 
    <div class="d-flex flex-row">
      <div class="d-flex flex-column">
        <div style="width: 200px; height: 290px;" class="position-relative">
          <b-img
            v-bind="mainProps"
            class="position-absolute"
            :src="'https://www.themoviedb.org/t/p/w440_and_h660_face/'+movie_details.backdrop_path"
          ></b-img>
        </div>
        <div class="mt-2">
          <b-button v-b-modal.fragmanmodal pill block variant="secondary" style="background-color:#343a40"  
            ><b-icon icon="tv" scale=".8"></b-icon>
            <span class="ml-1">Fragman</span></b-button
          >
        </div>
      </div>
     <MovieDetailsFragman :fragman="fragman.results"/>

      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <span class="name ml-3">{{ movie_details.title }}</span>
          <div
            class="ml-2 border d-flex flex-row text-center mt-2"
            style="width: 62px; height: 20px; background-color:  #dead28;"
          >
            <span class="imdb ml-1">imdb:</span>
            <span class="score ml-1">{{ movie_details.vote_average }}</span>
          </div>
        </div>
        <div class="d-flex flex-row mt-2">
          <div class="ml-3">
            <b-icon
              icon="globe"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">ABD</span>
          <span class="subname ml-1 mb-1">|</span>

          <div class="ml-2">
            <b-icon
              icon="calendar2-check"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">{{ movie_details.release_date }}</span>
          <span class="subname ml-1 mb-1">|</span>

          <div class="ml-2">
            <b-icon
              icon="film"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1" v-for="i in movie_details.genres" :key="i.id">{{ i.name }}, </span>

          <span class="subname ml-1 mb-1">|</span>

          <div class="ml-2">
            <b-icon
              icon="camera-reels"
              variant="dark"
              scale="0.9"
              class="ct"
            ></b-icon>
          </div>
          <span class="subname ml-1">Süre: {{ movie_details.runtime }} dk</span>
        </div>
        <hr class="ml-3" />
        <div
          class="ml-3"
          style="width: 800px; height: 160px; background-color:  #e3e8ec;"
        >
          <span class="text">
            {{ movie_details.overview }}
          </span>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    props:["movie_details","id"],
    data(){
        return{
            mainProps: { width: 200, height: 290, class: "m1" },
            fragman:[]
        }
    },
    created(){
    fetch('https://api.themoviedb.org/3/movie/'+this.id+'/videos?api_key=e5594e8b42419b59e585e4281dc05f9e&language=tr-TR')
    .then(res => res.json())
    .then(data => this.fragman = data)
  }
}
</script>

<style scoped>
.ct {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.name {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 21px;
  color: #000000;
  letter-spacing: 0px;
  opacity: 1;
}
.subname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
.text {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #000000b4;
  letter-spacing: 0px;
  opacity: 1;
}
.imdb {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #322708;
  letter-spacing: 0px;
  opacity: 1;
}
.score {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}

.border {
  border-radius: 0.25em;
}
</style>
