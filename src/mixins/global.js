export const global = {
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  watch: {},
  computed: {
    // isSmXs(){
    //   return this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm'
    // },
    // isXlLgMd(){
    //   return this.$vuetify.breakpoint.name === 'xl'|| this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'md'
    // },
    isLaptop() {
      return this.$vuetify.breakpoint.name === "md";
    },
    isTablet() {
      return this.$vuetify.breakpoint.name === "sm";
    },
    isMobile() {
      return this.$vuetify.breakpoint.name === "xs";
    },
    // isSmallScreen(){
    //   return this.$vuetify.breakpoint.name === 'sm'
    // }
  },
  methods: {},
};
