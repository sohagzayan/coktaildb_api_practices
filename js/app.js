// 1
const cir = {

    engine : 'used',
    body : 'new',

    details : {
        price : 20000 ,
        name : 'tata' ,
        color : 'green'
    },
    onerList : ['sohhag' , 'badol', 'riaj'] ,

    discount : function(){
        return `its cir name is ${this.details.name} and this color is ${this.details.color} orginal discount price ${this.details.price}`
    }

}
const result = cir.discount()
console.log(result);





// 2
const myStringVariable = `${cir.details.color} and ${cir.details.name} and ${cir.details.price}`
console.log(myStringVariable);


// 3

const EmtyParameter = ()=> {
    return '৮৯' 
}
const emtyResult = EmtyParameter()
console.log(emtyResult);


// 4

const allDevidedBy7 = (deget)=>{
    return deget / 7
}

const devidedReult = allDevidedBy7(14)
console.log(devidedReult);


// 5

const equalAndDevided = (num , num2)=> {
    return (num + num2) / 2
}
const equalDevidedResult = equalAndDevided(14, 6)
console.log(equalDevidedResult);


// 6


const multypoleEqual = (num1 , num2)=>{
    return (num1 + 7) + (num2 + 7)
}

const multypoleEqualResult = multypoleEqual(10 , 10)
console.log(multypoleEqualResult);


// 7

const numberList = [20, 40 , 50 , 60, 70 ]

const newArray = numberList.map(num => num / 7)
console.log(newArray)

// 8

const myObj = {
    friend : 'badol',
    name : 'sohag' ,
    age : 50 ,

}
const myArrayDis = ['sohag' , 'badol' , 'riaj']

let {name , age , friend} = myObj
let [,balance] = myArrayDis
console.log(balance)


// 9

const container = document.querySelector('.container')

function fetcingData(){
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then (data =>{
        // let lemetedData = 
         displayData(data)
         
     } )
}

 fetcingData()

function displayData (dataPhotos){
    // const eletedDta = data[0]
    const lemetedData = dataPhotos.slice(0 , 100)
   console.log(lemetedData);
    lemetedData.map((item) => {
      const wrappper = document.createElement('li') 
      wrappper.innerHTML = `
                <div class="card" style="width: 18rem;">
                        <img onclick="daynamicDetails('${item.id}')" src="${item.thumbnailUrl}" target="blank" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${item.title}</h5>
                    </div>
                </div>
      ` 
      container.appendChild(wrappper)
        // console.log(item)
    })
}



function daynamicDetails (id){
    const details = document.querySelector('.details')
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res =>  res.json())
    .then(data => {
        const div = document.querySelector('div')
        console.log(data)
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${data.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
              <span>${data.id}</span>
              <span>${data.albumId}</span>
            </div>
        </div>
        `

        details.appendChild(div)
    })
}
displayData()