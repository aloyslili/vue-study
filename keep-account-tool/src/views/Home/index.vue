<template>
  <div class="bcg">
    <HomeButton text="收入" bgColor="green" @click="$router.push('/form/income')" />
    <HomeButton text="支出" bgColor="red" @click="$router.push('/form/outlay')" />
  </div>
</template>

<script>
import HomeButton from './HomeButton';

export default {
  components: { HomeButton },
};
</script>

<style lang="scss" scoped>
.bcg{
  position: absolute;
  margin-top:0px ;
  height: 650px;
  width: 370px;
  margin: 0 auto;
  background: url(../../assets/bcg.jpeg) no-repeat;
  /* background-repeat:   no-repeat; */
  background-size: cover;
}
</style>

