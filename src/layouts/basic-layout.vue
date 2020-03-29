<template>
  <div>
    <Header />
    <SiderMenu></SiderMenu>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import SiderMenu from "./sider-menu";
export default {
  components: {
    Header,
    Footer,
    SiderMenu
  },
  data() {
    return {};
  }
};
</script>
<style></style>
