import  qbRequest  from "@/service/request/index"

export function getHouseDtails(houseId) {
    return qbRequest.get({
        url: "/detail/Infos",
        params: {
            houseId
        }
    })
}