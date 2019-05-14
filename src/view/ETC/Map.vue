<template>
  <div>
    {{msg}}
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import axios from 'axios';
import "Style/content/map/map.css"

export default {
  name: 'domestic-map',
  computed: {},
  components: {
  },
  data() {
    return {
      msg: 'map',
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
          center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };

      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      var map = new daum.maps.Map(mapContainer, mapOption);
    }
  }
}
</script>

<style>
.map {
  width: 500%;
  /* position: relative; */
  height: 100px;
}
</style>