//localstorage to hold car data in json
//create an empty json object
var cars = [] // array to be used in memory
var car ={
    make: null,
    model: null,
    year: null,
    color: null,
    image: null,
    regNum: null,
    image: null,
}

function dataStore(){
    if(localStorage.getItem('gallery') == null){
    localStorage.setItem('gallery' , JSON.stringify(cars)) //to be used on disk
}else{
    cars = (JSON.parse(localStorage.getItem('gallery')))
    console.log(cars)
    //cars = JSON.parse(localStorage.getItem('gallery'))
}
}
dataStore()

addTocarList = function(){
    var mk = document.getElementById('make')
    var md = document.getElementById('model')
    var yr = document.getElementById('year')
    var cl = document.getElementById('color')
    var img = document.getElementById('image')
    var rn = document.getElementById('regNum')

    nCar = Object.create(car)
    nCar.make = mk.value
    nCar.model = md.value
    nCar.year = yr.value
    nCar.color = cl.value
    nCar.regNum = rn.value
    nCar.image = img.value

 if (selectedIndex === -1){
        cars.push(nCar)
     } else {
         cars.splice(selectedIndex, 1, nCar);
     }

    
    localStorage.setItem('gallery' , JSON.stringify(cars))

    console.log(cars)

    clear (mk, md, cl, img, yr, rn)
    cfm()
    console.log('loading data from local storage')
    loadData()
}

function clear (mk, md, cl, img, yr, rn){
    md.value = ""
    mk.value = ""
    yr.value = ""
    cl.value = ""
    rn.value = ""
    img.value = ""
  
}
function cfm(){
    Swal.fire(
        'Good job!',
        'Data saved successfully',
        'success'
      )
}

function photoUpload(){
    var pht = document.getElementById('photo')
    pht.src = document.getElementById('image').value
}



function loadData(){
    var data = JSON.parse(localStorage.getItem('gallery'))
    var result = data.map(function card(dt, idx){
        return `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${dt.image}">
            <div class="card-body">
            <h5 class="card-title">${dt.make} - ${dt.model}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" id="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="deletionAlert('${idx}')">Remove</button>
              <button type="button" id="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#addCar"  data-bs-dismiss="modal" onclick= "editCar('${idx}')">Edit</button>
            </div>
          </div>
     </div>` 
     })
        document.getElementById('carlist').innerHTML = result.join("")
    }
    loadData()

    function deleteCar(idx){
        cars.splice(idx, 1)
        localStorage.setItem('gallery', JSON.stringify(cars));
        location.reload();
    }

    function deletionAlert(idx) {
        Swal.fire ({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteCar(idx)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            location.reload();
          })
    }

    function returnDefault(){
    document.getElementById('make').value = "";
    document.getElementById('model').value = "";
    document.getElementById('year').value = "";
    document.getElementById('color').value = "";
    document.getElementById('image').value = "";
    document.getElementById('regNum').value = "";
    document.getElementById('submit').innerHTML = "Add to list"
    }

     var selectedIndex = -1;
    function editCar(idx){
         
        var edit = cars[idx];
    document.getElementById('make').value = edit.make;
    document.getElementById('model').value = edit.model;
    document.getElementById('year').value = edit.year;
    document.getElementById('color').value = edit.color;
    document.getElementById('image').value = edit.image;
    document.getElementById('regNum').value = edit.regNum;
    document.getElementById('submit').innerHTML = "save changes"
    selectedIndex = idx;
    }


const searchBar = document.getElementById('search');
const searchButton = document.getElementById('searchButton');

function searchCar(){
    // console.log(cars)
    var result = cars.map(function card(dt) {
        if(searchBar.value.toLowerCase() === dt.make.toLowerCase() || searchBar.value == dt.model.toLowerCase() ||searchBar.value === dt.color.toLowerCase() ||searchBar.value === dt.year){
            return `<div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${dt.image}" class="card-img-top" alt="car Photo">
            <div class="card-body">
            <h5 class="card-title">${dt.make} - ${dt.model}</h5>
                <p class="card-text">Available
                    card's content.</p>
            </div>  
        </div>
    </div>`
        } 
        else{
            return ''
        }
      })
       document.getElementById('carlist').innerHTML = result.join("");

}


searchButton.addEventListener('click',searchCar)

function reload(){
    // location.reload();
    searchBar.value =""
    loadData() 
}




   
//var cars = [{
    //     make: 'Toyota',
    //     model: 'rav4',
    //     Year: 2020,
    //     color: 'red',
    //     regNum: '12335',
    //     regState: 'Lagos',
    //     image: 'https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-rav4-hybrid-limited-4wd-suv-angular-front.png?fit=around%7C875:492.1875'
    // }, {
    //     make: 'Lexus',
    //     model: 'rs 350',
    //     Year: 2022,
    //     color: 'red',
    //     regNum: '12345',
    //     regState: 'Lagos',
    //     image: 'https://www.lexus.com/content/dam/lexus/images/models/rx/2022/visualizer/350/exterior/18in-split-five-spoke-alloy/eminent-white-pearl/large-1.jpg'
    // }, {
    //     make: 'Nissan',
    //     model: 'sentra',
    //     Year: 2020,
    //     color: 'red',
    //     regNum: '12345',
    //     regState: 'Lagos',
    //     image: 'https://www.motortrend.com/uploads/sites/10/2016/05/2016-nissan-sentra-s-cvt-sedan-angular-front.png?fit=around%7C875:492.1875'
    
    // }, {
    //     make: 'Honda',
    //     model: 'Accord',
    //     Year: 2022,
    //     color: 'red',
    //     regNum: '12345',
    //     regState: 'Lagos',
    //     image: 'https://mysterio.yahoo.com/mysterio/api/33F0D45AD46224BE3B1AF3AB8387895CE242997F17DE6D8D578CB33DA6F9B4E9/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD10HOC011A021001.jpg'
    // }, {
    //     make: 'Hundia',
    //     model: 'Elantra',
    //     Year: 2022,
    //     color: 'red',
    //     regNum: '12345',
    //     regState: 'Lagos',
    //     image: 'https://cdn.motor1.com/images/mgl/xqgZLP/s4/2022-hyundai-elantra-n-exterior-front-quarter.webp'