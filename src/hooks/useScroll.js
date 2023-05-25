import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll(element) {
    const isReachBottom = ref(false)
    const scrollListHandler = (event) => {
        const clientHeight = event.target.clientHeight
        const scrollTop = event.target.scrollTop
        const scrollHeight = event.target.scrollHeight
        console.log(clientHeight+scrollTop, scrollHeight)
        if(clientHeight + scrollTop+1 >= scrollHeight) {
            isReachBottom.value = true
            console.log("到底部了")
        }
        
    }
        element.addEventListener("scroll", scrollListHandler)

    return { isReachBottom }
}

