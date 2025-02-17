export const useProducts = () => {
    const config = useRuntimeConfig();
    
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);
  
    const fetchProducts = async (search?: string) => {
      loading.value = true;
      error.value = null;
      try {
        const response = await fetch(`${config.public.apiBase}/products${search ? `?search=${search}` : ''}`);
        const data = await response.json();
        products.value = data;
      } catch (e) {
        error.value = 'Error fetching products';
        console.error(e);
      } finally {
        loading.value = false;
      }
    };
  
    return {
      products,
      loading,
      error,
      fetchProducts
    };
  };