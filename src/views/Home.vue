<template>
  <div class="home">
    <full-page :options="options" ref="page">
      <!--      第一屏-->
      <div class="section section1" >
        <!-- <video ref="video1" muted  x-webkit-airplay="allow" 
         webkit-playsinline webview.allowsInlineMediaPlayback = YES
         x5-video-player-type="h5"
         playsinline preload x5-video-player-fullscreen="true"
         width="100%" height="100%"
         class="video">
          <source :src="mp4" type="video/mp4">
        </video> -->
        <video id="video1" muted  x-webkit-airplay="allow"  webview.allowsInlineMediaPlayback = YES
                            x5-video-player-type="h5" webkit-playsinline
                            playsinline preload x5-video-player-fullscreen="true" class="video">
          <source src="@/assets/p1.mp4" type="video/mp4">
        </video>
        
      </div>
      <!--      第二屏-->
      <div class="section section2">
        <video id="video2" muted  x-webkit-airplay="allow" 
          webview.allowsInlineMediaPlayback = YES
         x5-video-player-type="h5"
          webkit-playsinline
         playsinline preload x5-video-player-fullscreen="true"
         class="video">
          <source src="@/assets/p2.mp4" type="video/mp4">
        </video>
      </div>
      <div class="section">
          <video id="video3" muted  x-webkit-airplay="allow" 
        
          webview.allowsInlineMediaPlayback = YES
          x5-video-player-type="h5"
          playsinline preload x5-video-player-fullscreen="true"
          class="video">
          <source src="@/assets/p3.mp4" type="video/mp4">
          </video>
          <div class="ajaxBox">
            <div class="div3">
              <div class="dutiao"></div>
            </div>
            <div class="textContent">
                <span class="biaoti">本年度参与话术通关</span>
            <span class="number">15次</span>
            </div>
            
          </div>
          
      </div>

    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
// import"@/assets/fullpage.min.css"

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      
      image:require('@/assets/bgImage.png'),
      backgroundList:[require('@/assets/bgImage1.png'),require('@/assets/bgImage2.png'),require('@/assets/bgImage3.png')],
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        onLeave:this.onLeave,
        scrollOverflow: true,
        navigation: true,//是否显示导航，默认为false
        navigationPosition: 'right',//导航小圆点的位置
        scrollBar: false,
        loopTop:false,
        loopBottom:false,
        keyboardScrolling: false,//是否可以使用键盘方向键导航，默认为true
        // continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
        menu: '#menu',
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    }
  },
  created(){
    
  },
  mounted(){
  
  },
  methods: {
    bbb(){
      this.playVideo(this.$refs.video3);
    },
// 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
      afterLoad:function(anchors,item) {
        // document.getElementsByClassName("section").background = "url("+ this.image+") no-repeat"
        let index = item.index
        if(index == 0) {
          
          var video1 = document.getElementById("video1")
          this.playVideo(video1, index);
        }
        if (index == 1) {
           var video2 = document.getElementById("video2")
           this.playVideo(video2, index);
        }
        if (index == 2) {
           var video3 = document.getElementById("video3")
           this.playVideo(video3, index);
           var div3 = video3.nextSibling.firstChild
           var dutiao = document.getElementsByClassName("dutiao")[0]
           var number = document.getElementsByClassName("number")[0]
            var biaoti = document.getElementsByClassName("biaoti")[0]
           div3.style.left = '70px'
           div3.style.width = '610px'
           div3.style.transition = 'all 2s ease'
           setTimeout(() => {
             dutiao.style.width="500px"
             dutiao.style.transition = 'all 1s ease'
             number.style.display = 'block'
             biaoti.style.display = 'block'
            //  setTimeout(() => {
               
            //  }, 100);
           }, 2000);
           
        }
      },
      handlePlay() {
        // this.$refs.video3.play();
        console.log('33333333')
      },
      playVideo:function(ele,index) {
        // ele.show()
         ele.style.display="block"
        ele.play()
        ele.click()
        ele.parentNode.style.background= "url("+ this.backgroundList[index]+") no-repeat"
        ele.parentNode.style.backgroundSize="100% 100%"
        ele.addEventListener("ended",function(){
         ele.style.display="none"
        //  ele.hide()

        })
      },
    }
}
</script>
<style scoped>
.section {
  position: relative;
}
  * {
    margin: 0;
    padding: 0;
  }
  .section {
     background: url(../assets/bgImage.png) no-repeat;
			background-size: 100% 100%;
  }
  /* .section2 {
    background: url(../assets/bg9.png) no-repeat;
			background-size: 100% 100%;
  }
    .section3 {
    background: url(../assets/bg9.png) no-repeat;
			background-size: 100% 100%;
  } */
  .video {
    width:100%;
    height:100%;
    object-fit: fill;
    display:none;
  }
  .p1 {
    position: absolute;
    top: 200px;
    /* left:100px;  */
   z-index:100;
    background: red;
    width:750px;
    height:50px;
    font-size: 30px;
  }
      *::-webkit-media-controls-enclosure {
      display:none !important;
      -webkit-appearance: none;
    }
    *::-webkit-media-controls-panel {
      display: none!important;
      -webkit-appearance: none;
    }
    *::-webkit-media-controls-panel-container {
      display: none!important;
      -webkit-appearance: none;
    }
    *::--webkit-media-controls-play-button {
      display: none!important;
      -webkit-appearance: none;
    }
    *::-webkit-media-controls-start-playback-button {
      display: none!important;
      -webkit-appearance: none;
    }
    *::-webkit-media-controls {
    display: none!important;
    -webkit-appearance: none;
    }
    .div3 {
     width:0px;
     height:32px;
     margin:0 auto;
     border-radius: 16px;
     background: #ddd;
     position: absolute;
    left:50%;
    line-height: 32px;
   
    }
   .dutiao {
     width:0px;
     height:30px;
     background: red;
     border-radius: 15px;
   }
   .biaoti {
     font-family: SourceHanSansCN-Medium;
      font-size: 30px;
      color: #FDFBFB;
      text-shadow: 2px 2px 4px rgba(14,28,32,0.50);
      font-weight: 500;
      opacity: 0%;
    /* transition: All 0.4s ease-in-out; */
    animation: huaru1 200ms ease-in forwards;
    display:none;
   }
   .number {
     font-family: SourceHanSansCN-Bold;
    font-size: 70px;
    color: #FDFBFB;
    line-height: 105px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.50);
    font-weight: 700;
    opacity: 0%;
    /* transition: All 0.4s ease-in-out; */
    animation: huaru 200ms ease-in forwards;
    display:none;
   }
   @keyframes huaru1 {
     to {transform:translate(0, -80px);opacity: 100%;}
   }
   @keyframes huaru {
     to {transform:translate(0, -120px);opacity: 100%;}
   }
   .ajaxBox {
     width:750px;
     position: absolute;
     /* left:70px; */
     top:70%;
     background: green;
     overflow: visible;
   }
   .textContent {
    margin-top:32px;
    display: flex;
    justify-content: space-around;
    overflow: visible;
   }
</style>