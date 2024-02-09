function updateclock(){
    const now = new Date();

    const hhmmssformat = formattime(now.getHours())+ ':' + formattime(now.getMinutes())+ ':'+ formattime(now.getSeconds());
    const hhmmssampmformat = formattime12hour(now.getHours()) + ':' +formattime(now.getMinutes()) + ':' +formattime(now.getSeconds()) + ' ' +getampm(now.getHours());
    console.log('24-hour format', hhmmssformat)
    console.log('12-hour format', hhmmssampmformat)
    console.log(" ")
}

function formattime(value){
    return value < 10 ? '0'+value:value;
}

function formattime12hour(value){
    return value % 12||12;
}

function getampm(hour){
    return hour>= 12? 'PM':'AM';
}

setInterval(updateclock,980)