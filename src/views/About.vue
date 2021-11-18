<template>
  <div class="about">
     <canvas class="video-wrap" id="video-android"></canvas>
  </div>
</template>


<script>
// import JSMpeg from '../utils/jsmpeg.min'
  export default {
    name: 'About',
    data(){
      return{
        mm:require('@/assets/p2.mp4'),
      
      }
    },
    mounted(){
      this.canvass = document.getElementById('video-android')
      this.jsmpegPlay(this.canvass,this.mm,this.startCallBack,this.playingCallBack,this.endCallBack) 
    },
    methods:{
	     jsmpegPlay(Vcanvas,vVideo,startFun,playingFun,endFun) {
         console.log('sss')
            return new JSMpeg.Player(
                vVideo ,{
                    canvas: Vcanvas, 
                 
                })
                 console.log('111111')
        },
        
        //视频开始播放（即解码完成）执行
         startCallBack() {
            
            this.canvas.style.display="block"
        },
        //视频播放进度
         playingCallBack(currentTime) {
          // console.log(currentTime)
        },
        //视频播放完成执行
         endCallBack() {
           
        }
  }
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .video {
    width:100%;
    height:100%;
  
   
  }
  .p1 {
    position: absolute;
    top: 200px;
    /* left:100px;  */
   
    background: red;
    width:750px;
    height:50px;
    font-size: 30px;
  }
  .video-wrap{
        height: 590px;
        
  }
</style>