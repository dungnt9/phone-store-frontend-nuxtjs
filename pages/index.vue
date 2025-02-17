<template>
    <div class="container mt-4">
      <h1>Phone Store</h1>
      
      <div class="mb-4">
        <div class="input-group">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Search products..."
            @input="handleSearch"
          >
          <button class="btn btn-primary" @click="handleSearch">
            Search
          </button>
        </div>
      </div>
  
      <div v-if="loading" class="text-center">
        Loading...
      </div>
  
      <div v-else-if="error" class="alert alert-danger">
        {{ error }}
      </div>
  
      <div v-else class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="product.image_url" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">
                <strong>Price:</strong> ${{ product.price }}
              </p>
              <p class="card-text">
                <strong>Stock:</strong> {{ product.stock }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Product } from '~/types/product';

const searchQuery = ref('');
const { products, loading, error, fetchProducts } = useProducts();

const handleSearch = () => {
  fetchProducts(searchQuery.value);
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>