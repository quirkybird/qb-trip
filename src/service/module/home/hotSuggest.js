import qbRequset from "@/service/request"

export function getHotSuggest() {
    return qbRequset.get({
        url: "/home/hotSuggests"
    })
}