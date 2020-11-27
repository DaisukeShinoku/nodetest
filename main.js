require('date-utils');

const date = new Date();
const currentTime = date.toFormat('YYYYMMDDHH24MISS');
console.log(date);
console.log(currentTime);

date.setDate(new Date().getDate() - 1);
const onedayagoTime = date.toFormat('YYYYMMDDHH24MISS');
console.log(date);
console.log(onedayagoTime);