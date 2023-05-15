<template>
  <div>
    <!--start slide -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://noithatanmoc.vn/wp-content/uploads/2021/07/thiet-ke-noi-that-phong-khach-chung-cu-noi-that-an-moc-76.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://noithatnhadepviet.vn/thumbs/500x0x1/upload/photo/clien-13-5441.jpg"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://giabaogroup.vn/wp-content/uploads/2020/07/ngam-thiet-ke-phoi-canh-noi-that-dep-lung-linh-cho-can-ho-chung-cu-avt.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <!--  -->
    <b-container fluid="md" class="mt-5">
      <b-row class="mt-5">
        <b-col
          ><div>
            <b-card
              title="Bàn ghế cao cấp"
              img-src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600"
              img-alt="Image"
              img-top
              img-height="300px"
              tag="article"
              style="max-width: 20rem"
              class="mb-2 shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div></b-col
        >
        <b-col
          ><div>
            <b-card
              title="Bàn ghế cao cấp"
              img-src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600"
              img-alt="Image"
              img-top
              img-height="300px"
              tag="article"
              style="max-width: 20rem"
              class="mb-2 shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div></b-col
        >
        <b-col
          ><div>
            <b-card
              title="Bàn ghế cao cấp"
              img-src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600"
              img-alt="Image"
              img-top
              img-height="300px"
              tag="article"
              style="max-width: 20rem"
              class="mb-2 shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div></b-col
        >
      </b-row>
      <b-row class="mt-5">
        <b-col
          ><div>
            <b-card
              title="Bàn ghế cao cấp"
              img-src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600"
              img-alt="Image"
              img-top
              img-height="300px"
              tag="article"
              style="max-width: 20rem"
              class="mb-2 shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div></b-col
        >
        <b-col
          ><div>
            <b-card
              title="Bàn ghế cao cấp"
              img-src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600"
              img-alt="Image"
              img-top
              img-height="300px"
              tag="article"
              style="max-width: 20rem"
              class="mb-2 shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div></b-col
        >
        <b-col
          ><div>
            <b-card
              title="Bàn ghế cao cấp"
              img-src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1600"
              img-alt="Image"
              img-top
              img-height="300px"
              tag="article"
              style="max-width: 20rem"
              class="mb-2 shadow p-3 mb-5 bg-white rounded"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div></b-col
        >
      </b-row>
      <!--  -->
      <div></div>
      <div>
        <b-table striped hover :items="items"></b-table>
      </div>
    </b-container>
  </div>
</template>
  
  
  
  <script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,

      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<script>
</script>

<style lang="scss" scoped>
</style>