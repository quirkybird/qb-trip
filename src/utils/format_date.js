import dayjs from "dayjs";
export  function formatMonthDay(date, formatStyle = "MM月DD日") { //添加参数默认值
        return dayjs(date).format(formatStyle); 
}
export function getDiffDays(start, end) {
        return dayjs(end).diff(start, "day")
}