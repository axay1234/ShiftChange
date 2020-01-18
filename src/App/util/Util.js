export const getQueryParamValue = (props, key) => {
    if ((!props) || (!key)) {
        return null;
    }
    let search = props.location.search;
    if (!search) {
        return null;
    }
    search = search.replace('?', '');
    let keyValues = search.split('&');
    if (keyValues.length == 0) {
        return null;
    }
    let keyValue = keyValues.map(
        keyVal => {
            let pairSplit = keyVal && keyVal.split('=');
            return pairSplit;
        }
    ).find(pairSplit => { return pairSplit && pairSplit[0] === key; });
    return keyValue && keyValue.length == 2 ? keyValue[1] : null;
}

export const formatDate = (date) => {
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth() + 1;
    let year = date.getFullYear();

    day = (day + "").length == 1 ? ("0" + day) : day;
    monthIndex = (monthIndex + "").length == 1 ? ("0" + monthIndex) : monthIndex;

    return `${monthIndex}/${day}/${year}`;
}

