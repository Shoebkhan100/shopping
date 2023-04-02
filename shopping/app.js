
fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json()
}).then((completedata)=>{
    let shoeb = ''
   let bhai =  completedata.map((values)=>{
        let con = document.getElementById("container").innerHTML =
          shoeb +=

        `<div class="s"><div  >
        <h2>${values.title}</h2>
         <img class="photo" src=${values.image} alt="">
         <h3>${values.category}</h3>
         <p></p>
        <p class="price">${values.price}</p>
        <div class="b">
        <button  class="plus " onclick=" increament (${values.id})" ><img src="images/plus-solid (1).svg" alt=""></button>
        <p class="num">0</p>
        <button class="minus" onclick="decreament(${values.id})"><img src="images/minus-solid.svg" alt=""></button>
        </div>

        </div> </div>`


        
       
    })
    .join()});

    

    let num = document.getElementsByClassName("num")
    let a = 0
    let increament= (id)=>{
      
        
       basket.push[{
        a : id,
        b : 1
       }]

       console.log(basket)
    
        

    }
    


    let decreament= (id)=>{
     console.log(id)
    }

    let basket=[{}];

    console.log(basket)

    








