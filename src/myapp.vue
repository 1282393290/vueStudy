<template>
  <div>
    首页
    <router-view />
    <router-link tag="button" :to="{name:'test',params:{id:10}}">跳转</router-link>
  </div>
</template>
