export default function(defaultKeys) {
    return rawData =>
        Object.fromEntries(Object.keys(defaultKeys).map(key => [[defaultKeys[key]], rawData[key]]));
}
