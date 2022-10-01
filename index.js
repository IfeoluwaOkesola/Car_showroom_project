//localstorage to hold car data in json
//create an empty json object
var cars = [] // array to be used in memory
var car ={
    model: null,
    make: null,
    year: null,
    color: null,
    image: null,
    regNum: null,
    image: null,
}

//function dataStore(){
  //  if(localStorage.getItem('gallery') == null)
    //localStorage.setItem('gallery' , JSON.stringify(cars)) //to be used on disk
//}

//dataStore()

addTocarList = function(){
    var mk = document.getElementById('make')
    var md = document.getElementById('model')
    var yr = document.getElementById('year')
    var cl = document.getElementById('color')
    var img = document.getElementById('image')
    var rn = document.getElementById('regNum')
    car.model = md.value
    car.make = mk.value
    car.year = yr.value
    car.color = cl.value
    car.regNum = rn.value
    car.image = img.value

    cars.push(car)
    console.log(cars)
}
//addTocarList();

/*var cars = [{
    make: 'Toyota',
    model: 'rav4',
    Year: 2020,
    color: 'red',
    regNum: '12335',
    regState: 'Lagos',
    image: 'https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-rav4-hybrid-limited-4wd-suv-angular-front.png?fit=around%7C875:492.1875'
}, {
    make: 'Lexus',
    model: 'rs 350',
    Year: 2022,
    color: 'red',
    regNum: '12345',
    regState: 'Lagos',
    image: 'https://www.lexus.com/content/dam/lexus/images/models/rx/2022/visualizer/350/exterior/18in-split-five-spoke-alloy/eminent-white-pearl/large-1.jpg'
}, {
    make: 'Nissan',
    model: 'sentra',
    Year: 2020,
    color: 'red',
    regNum: '12345',
    regState: 'Lagos',
    image: 'https://www.motortrend.com/uploads/sites/10/2016/05/2016-nissan-sentra-s-cvt-sedan-angular-front.png?fit=around%7C875:492.1875'

}, {
    make: 'Honda',
    model: 'Accord',
    Year: 2022,
    color: 'red',
    regNum: '12345',
    regState: 'Lagos',
    image: 'https://mysterio.yahoo.com/mysterio/api/33F0D45AD46224BE3B1AF3AB8387895CE242997F17DE6D8D578CB33DA6F9B4E9/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD10HOC011A021001.jpg'
}, {
    make: 'Hundia',
    model: 'Elantra',
    Year: 2022,
    color: 'red',
    regNum: '12345',
    regState: 'Lagos',
    image: 'https://cdn.motor1.com/images/mgl/xqgZLP/s4/2022-hyundai-elantra-n-exterior-front-quarter.webp'
}]*/