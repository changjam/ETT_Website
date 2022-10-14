<template>
  <v-container>
    <!-- ---Title--- -->
    <v-row class="Title text-center ">
      <v-col class="">
        <h1 class="Title-text font-weight-bold">
          上傳你要偵測的胸腔X光影像
        </h1>
      </v-col>
    </v-row>

    <!-- ---Main-input--- -->
    <v-row id="main-input" class="main"  width="100vw">
      <v-col class="align-center" align="center">
        <div class="box">
          <img id="InputXRay" :src="url" alt="">
        </div>
        <v-file-input @change="onfile" v-model="imageObj" prepend-icon="mdi-upload" chips ref="fileUpload"></v-file-input>
        <v-btn :loading="loading" @click="startDetect" color="blue lighten-2" x-large>開始偵測</v-btn>
      </v-col>
    </v-row>

    <div v-if="showOutput" class="splitLine"></div>

    <!-- <v-file-input style="position:absolute" @change="onfile2" v-model="new_imageObj"></v-file-input> -->
    <!-- ---Main-output--- -->
    <v-row v-if="showOutput" id="main-output" class="main">
      <v-col class="main-left align-center" align="center">
        <div class="outputBox">
          <img id="outputXRay" :src="Imgtemp" alt="照片出不來就假設有吧">
        </div>
        <v-row justify="center" class="mt-2">
          <v-btn class="mr-4" @click="showOriginImage" color="blue lighten-2" x-large>切換</v-btn>
          <v-btn @click="saveImg" color="blue lighten-2" x-large>儲存影像</v-btn>
        </v-row>
      </v-col>

      <v-col class="main-bottom" align="left">
          <h1 >File Name：001.png</h1>
          <h1 >Distence：6cm</h1>
          <h1 >Result：位置正常</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'StartPage',

    data: () => ({
      // bool
      loading:false,
      showOutput:false,
      switchToOriginal:true,
      //img
      Imgtemp:null,
      url: null,
      imageObj: null,
      new_imageObj: null,
      new_url:require('../assets/images/XRay2.png'),
      //img imformation
      imgFile:{
        fileName:"",
        Distence:"",
        Result:"",
      }
    }),
    methods: {
      startDetect(){
        // 如果有檔案
        if (this.imageObj) {
          this.loading = true;

          let formData = new FormData();
          formData.append("file", this.imageObj)
          formData.append("fileName", this.imageObj.name)
          // 使用Axios，post資料給後端
          // axios.post("/upload-files", formData).then(response => {
          //       console.log("Success!");
          //       console.log({ response });
          //   }).catch(error => {
          //       console.log({ error });
          //   });
          //模擬
          setTimeout(()=>{
            this.loading = false;
            this.showOutput = true;
            //要等到頁面完全加載才能滾動
            this.$nextTick(()=>{
              document.querySelector("#main-output").scrollIntoView({ block: 'end',  behavior: 'smooth' })
              this.onfile2()
            })
          },2000);
        }
      },
      onfile() {
        if(this.imageObj){
          this.url= URL.createObjectURL(this.imageObj)
        }else{
          this.url = null;
        }
      },
      onfile2() {
        // 這邊要改new_imgOBJ
        if(this.imageObj){
          // this.new_url= URL.createObjectURL(this.new_imageObj)
          this.Imgtemp = this.new_url;
        }else{
          this.new_url = null;
          this.Imgtemp = this.new_url;
        }
      },
      showOriginImage(){
        if(this.switchToOriginal){
          // new to old
          this.Imgtemp = this.url;
        }else{
          //old to new
          this.Imgtemp = this.new_url;
        }
        this.switchToOriginal = !this.switchToOriginal;
      },
      downloadIamge(imgsrc, name) {
				var image = new Image();
				// 解決跨域 Canvas 汙染問題
				image.setAttribute("crossOrigin", "anonymous");
				image.onload = function() {
					var canvas = document.createElement("canvas");
					canvas.width = image.width;
					canvas.height = image.height;
					var context = canvas.getContext("2d");
					context.drawImage(image, 0, 0, image.width, image.height);
					var url = canvas.toDataURL("image/png"); //得到圖片的base64編碼
					var a = document.createElement("a"); // 生成一个a元素
					var event = new MouseEvent("click"); // 創建一個點擊事件
					a.download = name || "photo"; // 設置圖片名稱
					a.href = url;
					a.dispatchEvent(event); //觸發事件
				};
				image.src = imgsrc;
			},
			saveImg() {
				this.downloadIamge(this.new_url, 'new_'+this.imageObj.name);
			},
      
    },
  }
</script>

<style scoped>

p{
  font-weight: 600;
}

.Title-text{
  font-size: 50px;
}

.main .box{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px rgb(0, 0, 0) solid;
  width: 400px;
  height: 400px;
}

#main-output{
  margin-bottom: 20px;
}

.main .outputBox{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px rgb(0, 0, 0) solid;
  width: 500px;
  height: 500px;
}

.main-bottom{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-bottom h1{
  font-size: 50px;
  margin:10px 0px;
  white-space: nowrap;
}

.main .v-file-input{
  width: 200px;
}

img{
  width: 100%;
  height: 100%;
}

@media screen and (max-width:700px){
  .Title-text{
    font-size: 40px;
  }
  .main .box{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px black solid;
    width: 350px;
    height: 350px;
  }
  
  .main .outputBox{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px black solid;
    width: 400px;
    height: 400px;
  }
}

@media screen and (max-width:500px){
  .main-bottom h1{
    margin:10px 0px;
    font-size: 40px;
  }

  .main .outputBox{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px black solid;
    width: 350px;
    height: 350px;
  }
}
</style>