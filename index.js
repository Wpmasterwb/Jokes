function joks(){
    let config= {
        headers:{
           'Accept' :'application/json'
        
    }
}
axios.get("https://icanhazdadjoke.com", config).then((res)=>{
    console.log(res.data.joke);
    document.getElementById("joks").innerHTML=res.data.joke
}).catch((err)=>{
    console.log("err")
    document.get
})
}
window.onload=joks