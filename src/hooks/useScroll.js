import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll(element) {
    let isReachBottom = ref(false)
    let clientHeight  = ref(0)
    let scrollTop  = ref(0)
    let scrollHeight  = ref(0)
    const scrollListHandler = (event) => {
         clientHeight.value = event.target.clientHeight
         scrollTop.value = event.target.scrollTop
         scrollHeight.value = event.target.scrollHeight
        if(clientHeight.value + scrollTop.value+1 >= scrollHeight.value) {
            isReachBottom.value = true
            console.log("到底部了")
        }
        
    }
        element.addEventListener("scroll", scrollListHandler)

    return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}

