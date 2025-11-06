 

const check =() =>{
    let day = parseInt(document.getElementById("dayInput").value,10)
    let month = parseInt(document.getElementById("monInput").value,10)
    let year = parseInt(document.getElementById("yearInput").value,10)
 

    if(isNaN(day)  ||isNaN(month) ||isNaN(year) ||day<1||month<1||day>31||month>12||month.length > 2||day.length>2||year.lenth>4  ){
        console.log("give all the details")
        alert("Enter number only & fill all the details")
    }

    const birthDate = new Date(year,month -1,day)
    const today =new Date()
    console.log(today)

    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days =  today.getDate() - birthDate.getDate()
     
    if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
}

if(months < 0){
    years--;
    months +=12;
}


    document.getElementById("result-days").innerHTML = days;
    document.getElementById("result-months").innerHTML = months;
    document.getElementById("result-years").innerHTML = years;


}