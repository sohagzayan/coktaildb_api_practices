const listGroup = document.querySelector('ul')
const input = document.querySelector('.input-group input')
const searchBtn = document.querySelector('#basic-addon2')
const lodingimage = document.querySelector('.lodingimage')


searchBtn.addEventListener('click' , getSearchResult)

function getSearchResult(){
    lodingimage.style.display = 'block'
    coktailDb()
}

function coktailDb(){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`
    input.value = ''
    fetch(url)
    .then(res => res.json())
    .then(data => disPlayData(data.drinks))
}


function disPlayData(itemData){
    listGroup.innerHTML = ''
    itemData.map(item => {
        let {strDrinkThumb , strDrink,dateModified} = item
           const div = document.createElement('div') 
          
           div.innerHTML = `
          
                <div class="card" style="width: 18rem;">
                    <img src="${strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${strDrink}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

           `
           listGroup.appendChild(div)
    } )
}












