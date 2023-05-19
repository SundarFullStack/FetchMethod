

var restcountries_api = fetch("https://restcountries.com/v3.1/all")
    
    .then((data) => data.json())

    .then((result) => {

        foo(result)


    });


function foo(data) {

            //environment
        
    let container = document.createElement('div');

    container.setAttribute('class','container')

    let row = document.createElement('div');
    
    row.setAttribute('class','row')

    let box = document.createElement('div', 'class', 'box');
    
    box.setAttribute('class', 'box');

    
    document.body.append(container);

    container.append(row);

    row.append(box);

    
    for (let i = 0; i < Object.keys(data).length; i++){

        
        row.innerHTML += `<div class='card card text-center'>
        <div class="Country">${data[i].continents}</div>
        <img class="Flag img-fluid  mt-4" src="${data[i].flags.svg}"></img>
        <div class="Capital mt-3">${data[i].capital}</div>
        <div class="Region mt-3">${data[i].region}</div>
        
        </div>`

       



        // let card = document.createElement('div');

        // card.setAttribute('class', 'card text-center m-5');

        // let Country = document.createElement('div');

        // Country.setAttribute('class', 'Country');

        // Country.innerText =data[i].continents;

        // let Flag = document.createElement('img');
        
        // Flag.setAttribute('class', 'Flag img-fluid  mt-4');

        // Flag.src =data[i].flags.svg;
        
        // let Capital = document.createElement('div');

        // Capital.setAttribute('class', 'Capital mt-3');

        // Capital.innerText ='Capital : '+data[i].capital;
        
        // let Region = document.createElement('div');

        // Region.setAttribute('class', 'Region mt-3');

        // Region.innerText ='Region : '+data[i].region;
    

        // //append in html page

        // box.append(card);

        // card.append(Country);

        // card.append(Flag);

        // card.append(Capital);

        // card.append(Region);
    
       
        
    }
}



