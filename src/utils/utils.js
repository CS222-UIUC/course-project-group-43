import { DATE_TYPE, MONTHS } from "./constants";

export function getZeros(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr[i] = 0;
    }
    return arr;
}

export function getDate(date, date_type) {
    if (date_type == DATE_TYPE.DAY) {
        return date.toDateString();
    } else if (date_type == DATE_TYPE.MONTH) {
        MONTHS[date.getMonth()];
    } else {
        return null;
    }
}

export function getDateArray(start_date, end_date, date_type) {
    const output_arr = [];
    const curr_date = new Date(start_date);
    while (curr_date <= end_date) {
        output_arr.push(getDateLabel(curr_date, date_type));
        if (date_type == DATE_TYPE.DAY) {
            curr_date.setDate(curr_date.getDate() + 1);
            break;
        } else if (date_type == DATE_TYPE.MONTH) {
            curr_date.setMonth(curr_date.getMonth() + 1);
            break;
        }
    }
    return output_arr;
}

export function getFilenameDate() {
    const date = new Date();
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "_" +
      pad(date.getHours()) +
      "-" +
      pad(date.getMinutes()) +
      "-" +
      pad(date.getSeconds())
    );
}
  