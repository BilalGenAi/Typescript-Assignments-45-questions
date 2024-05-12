"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answare = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigation', 'power window'] });
console.log(answare);
