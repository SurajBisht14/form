function getId(dataId){
      return(
                new Promise((resolve,reject)=>{
                setTimeout(()=>{
                console.log(dataId);
                resolve("success")
                },3000)
                })
            )
}
console.log("Fetching data 1=");
getId(1).then((res)=>{
}).then((res)=>{
    console.log("Fetching data 2=")
    getId(2);
}).then((res)=>{
    console.log("Fetching data 3=")
    getId(3);
})