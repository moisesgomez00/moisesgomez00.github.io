/** Calcula automáticamente la edad */
function getAge(){
    let now = Date.now()
    let birth = new Date(2000,1,5)
    let milisecByYear = 365*24*60*60*1000
    return parseInt((now-birth)/milisecByYear)
}

function meltAnimation(){
    setTimeout(
        () => {
            var disappearObjs = document.querySelectorAll(".disappear");
            disappearObjs.forEach((obj)=>{
                obj.style.opacity=0;
            })
        },
        300
    )
    
    setTimeout(() => {
        var appearObjs = document.querySelectorAll(".appear");
        appearObjs.forEach((obj) =>{
            obj.style.visibility = "visible"
            obj.style.opacity = 1;
        })
    }, 1700);

}