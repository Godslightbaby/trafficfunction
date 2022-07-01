function newTraffic(color){
    // let colors = red
    if(color=="red" || color == "RED" || color=="Red") {
        console.log("Stop")
    }else if(color=="yellow" || color =="YELLOW" || color=="Yellow"){
        console.log("get ready")
    }else if(color=="green" || color=="GREEN" || color=="Green"){
        console.log("GO")
    }else{
        console.log("TRY AGAIN")
    }
}
newTraffic("Yellow")