
const Weather = () => {
let temp = 26;

if(temp < 15){
    return <h1>It's cold outside</h1>
}else if(temp >= 15 && temp <= 26){
    return <h1>Its nice weather</h1>
}else{
    return <h1>It's hot outside</h1>
}

}

export default Weather;