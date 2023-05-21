export const getAssetURL = (image)  => {
    // 第一个参数为相对路径
    // 参数二，当前路径的URL
    return new URL(`../assets/img/${imge}`,import.meta.url).href
}