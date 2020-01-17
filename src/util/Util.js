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