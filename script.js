Vue.createApp({
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
      colorValue: "RGB(0, 0, 0)",
    };
  },
  methods: {
    updateColor() {
      this.colorValue = `RGB(${this.red}, ${this.green}, ${this.blue})`;
      document.body.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    randomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((res) => res.json())
        .then((data) => {
          const colorFromApi = data.color;
          document.body.style.backgroundColor = colorFromApi;
        });
    },
  },
  mounted() {
    this.updateColor();
  },
}).mount("#app");
