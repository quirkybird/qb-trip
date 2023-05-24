import qbRequest from "@/service/request/index"

export function getHomeCategory() {
    return qbRequest.get({
        url: "/home/categories"
    })
}