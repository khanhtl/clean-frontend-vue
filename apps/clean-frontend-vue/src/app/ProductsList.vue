<script setup lang="ts">
import { plocsCollection } from '@clean-frontend-vue/core';
import { usePlocState } from './common/usePlocState';
import { onMounted } from 'vue';

const productsPloc = plocsCollection.provideProductsPloc();
const state = usePlocState(productsPloc);
onMounted(() => productsPloc.search(''));
</script>

<template>
  <template v-if="state.kind === 'LoadingProductsState'">
    loading.....
  </template>
  <template v-if="state.kind === 'LoadedProductsState'">
    <div class="d-flex flex-wrap" style="gap: 16px;">
      <div
      style="width: 300px; height: 430px;"
      v-for="product in state.products"
      :key="product.id"
    >
      <div class="card">
        <img
          class="card-img-top"
          :src="product.image"
          alt="Card image"
          width="150"
          height="250"
        />
        <div class="card-body">
          <p class="card-title">{{ product.title }}</p>
          <p class="card-text">
            <b>$ {{ product.price }}</b>
          </p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
    </div>
  </template>
  <template v-if="state.kind === 'ErrorProductsState'"> Error..... </template>
</template>
