<template>
  <div>
    <div
      class="my-upload light--text justify-center"
      :style="uploadContainer"
      @mouseover="hoverUploadDiv(true)"
      @mouseleave="hoverUploadDiv(false)"
    >
      <img :src="imageUrl" v-if="imageUrl">
      <div @click="onImgPick" v-if="!imageUrl" class="div-upload-button">
        <v-icon class="btn-upload">add</v-icon>
      </div>
      <div class="dialog" :style="dialogImgStyle" v-if="imageUrl">
        <v-dialog content-class="dialog-position" v-model="dialog" width="50%">
          <v-icon slot="activator" class="img-zoom-icon">search</v-icon>

          <v-icon slot="default" class="img-close-icon" @click="dialog = false">close</v-icon>
          <img :src="imageUrl" width="100%">
        </v-dialog>

        <v-icon class="img-delete-icon" @click="imageRemove">delete_forever</v-icon>
      </div>
      <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  props: {
    width: {
      type: String,
      default: "150px"
    },
    height: {
      type: String,
      default: "150px"
    },
    url: {
      type: String,
      default: ""
    },
    beforeUpload: Function
  },
  data() {
    return {
      dialog: false,
      // Img
      imgName: "",
      imageUrl: "",
      isHover: false
    };
  },
  computed: {
    uploadContainer() {
      let style = {};

      if (this.width) {
        style.width = this.width;
      }
      if (this.height) {
        style.height = this.height;
      }
      return style;
    },
    dialogImgStyle() {
      let style = {};

      if (this.isHover === true) {
        style = { opacity: "0.7" };
      } else {
        style = { opacity: "0" };
      }

      return style;
    }
  },
  watch: {
    url: {
      handler(val) {
        this.imageUrl = val;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onFilePicked(e) {
      this.isHover = false;
      const files = e.target.files;

      if (files[0] !== undefined) {
        if (this.beforeUpload) {
          const before = this.beforeUpload(files[0]);
          if (before) {
            this.changeImage(files[0]);
          }
        } else {
          this.changeImage(files[0]);
        }
      } else {
        this.imgName = "";
        this.$emit("change", null);
        this.$emit("change-url", this.imageUrl);
      }
      this.$refs.image.value = null;
    },
    changeImage(files) {
      this.imgName = files.name;
      if (this.imgName.lastIndexOf(".") <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(files);
      fr.addEventListener("load", () => {
        this.imageUrl = fr.result;
        this.$emit("change-url", fr.result);
      });
      this.$emit("change", files);
    },
    onImgPick() {
      this.$refs.image.click();
    },
    imageRemove() {
      this.imgName = "";
      this.$emit("change-url", "");
      this.$emit("change", null);
    },
    hoverUploadDiv(hoverState) {
      this.isHover = hoverState;
    }
  }
};
</script>

<style scoped>
.my-upload {
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.div-upload-button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
}

.div-upload-button .btn-upload {
  font-size: 35px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 5px;
}
.dialog {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: default;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.img-delete-icon {
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  padding: 0 5px;
  line-height: 1;
}
.img-zoom-icon {
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  padding: 0 5px;
  line-height: 1;
}
.img-close-icon {
  font-size: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
}
.dialog-position {
  position: relative;
}
</style>


