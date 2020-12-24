function getAge(){
    let now = Date.now()
    let birth = new Date(2000,1,5)
    let milisecByYear = 365*24*60*60*1000
    return parseInt((now-birth)/milisecByYear)
}