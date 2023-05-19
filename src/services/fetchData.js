// Consume la api rest que recibe como argumento
import { onMounted, ref } from 'vue'

export function fetchData(url) {
    const arrayData = ref([])
        
    onMounted(async() => {    
        try {
            const res = await fetch(url)
            arrayData.value = await res.json()
        } catch (error) {
            console.log(error)
        }
    })
    
    return { arrayData }
}