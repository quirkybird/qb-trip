import qbRequest from "../request"

export function getCityAll() {
    return qbRequest.get({
        url: "/city/all"
    })
}