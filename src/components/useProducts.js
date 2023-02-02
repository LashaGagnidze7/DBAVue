import axios from "axios";
import {ref, onMounted} from 'vue'

export default function useProducts() {
    const apiUrl = 'http://items.magischer.de/api/products'
    const limit = 5
    const lang ='en'
    const products = ref([])
    const meta = ref(null)
    const product = ref(null)

    function getProducts(url = apiUrl) {
        axios.get(url, {
            params: {
                limit: limit,
                lang: lang
            }
        }).then((res) => {
            meta.value = res.data
            products.value = res.data.data
        })
    }

    function showProduct(id) {
        axios.get((apiUrl+ '/' + id),).then((res) => {
            product.value = res.data.data
        })
    }

    onMounted(function() {
        getProducts(apiUrl)
        
    })

    return {
        products, 
        getProducts, 
        meta, 
        product, 
        showProduct
    }
}