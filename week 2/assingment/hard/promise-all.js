function wait1(t){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t);
    });
}
function wait2(t){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t);
    });
}
function wait3(t){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t);
    });
}

function calculateTime1(t1,t2,t3){
    const starttime1 = Date.now();

    const promise1 = wait1(t1);
    const promise2 = wait2(t2);
    const promise3 = wait3(t3);

    return Promise.all([promise1,promise2,promise3]).then(()=>{
        const endtime1 = Date.now();
        return endtime1 -starttime1;
    });
}

function calculateTime2(t1,t2,t3){
    const starttime2 = Date.now();
    
    return wait1(t1)
        .then(()=>wait2(t2))
        .then(()=>wait3(t3))
        .then(()=>{
            const endtime2 = Date.now();
            return endtime2-starttime2;
        });
}



module.exports = calculateTime1;
module.exports = calculateTime2;