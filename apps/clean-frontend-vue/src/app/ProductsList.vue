<script setup lang="ts">
import { plocsCollection } from '@clean-frontend-vue/core';
import { usePlocState } from './common/usePlocState';
import { onMounted } from 'vue';

const productsPloc = plocsCollection.provideProductsPloc();
const state = usePlocState(productsPloc);
onMounted(() => productsPloc.search(''));

console.log(state.value.kind);
</script>

<template>
  <template v-if="state.kind === 'LoadingProductsState'">
    loading.....
  </template>
  <template v-if="state.kind === 'LoadedProductsState'">
    <div
      class="d-inline-block"
      style="width: 300px"
      v-for="product in state.products"
      :key="product.id"
    >
      <div class="card" style="width: 200px">
        <img
          class="card-img-top"
          :src="product.image"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">{{ product.title }}</h4>
          <p class="card-text">
            <b>$ {{ product.price }}</b>
          </p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  </template>
  <template v-if="state.kind === 'ErrorProductsState'"> Error..... </template>
</template>
