<template>
  <div>
    <b-modal id="fragmanmodal" hide-footer hide-header size="lg">
      <div v-if="fragman">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="'https://www.youtube.com/embed/' + fragman[0].key"
          allowfullscreen
        ></b-embed>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["fragman"]
};
</script>