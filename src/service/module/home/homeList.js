import qbRequest from "@/service/request/index"

export function getHomeList(currentPage) {
    return qbRequest.get({
        url: `home/houselist?page=${currentPage}`
    })
}