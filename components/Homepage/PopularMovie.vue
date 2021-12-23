<template>
     <b-row class="px-5" v-if="pop">
       <b-col md="2" v-for="movie in pop" :key="movie.id">
    <div
      style="width: 440px; height: 320px;"
      class="position-relative"
    >
      <b-link :to="'/movie/'+movie.id">
        <b-img
          class="position-absolute"
          :src="'https://www.themoviedb.org/t/p/w440_and_h660_face/'+movie.backdrop_path"
          alt="Image 1"
          style="width:200px; height:290px;"
        ></b-img>
        <div
          class="position-absolute d-flex flex-column"
          style="background-color:  #000000; width: 200px; height: 60px; top:230px; opacity: 0.7;word-wrap:break-word;"
        >
          <div  style="width: 300px;">
            <span class="name ml-1">{{movie.title}}</span>
          </div>
          <div class="d-flex flex-row ml-2 mt-2">
            <b-icon icon="star-fill" variant="warning"></b-icon>
            <span class="score ml-1 mb-1">{{movie.vote_average}}</span>
            <div class="ml-auto d-flex flex-row">
              <span class="year mr-1">{{movie.release_date}}</span>
            </div>
            <b-icon
              icon="patch-check-fill"
              class="mr-1"
              variant="light"
            ></b-icon>
          </div>
        </div>
      </b-link>
    </div>
           </b-col>

  </b-row>
</template>
<script>
export default {
  props:["pop"]
}
</script>
<style scoped>
.name {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: #ffff00;
  letter-spacing: 0.5px;
  opacity: 1;
}
.score {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}
.year {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0px;
  opacity: 1;
}
</style>
