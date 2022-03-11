console.log("hey")
let cat = document.querySelector(".randomCat");
let image = document.querySelector(".randomCatImage")
let button = document.querySelector(".randomButton")

button.addEventListener("click", function(e) { 
fetch("https://api.thecatapi.com/v1/images/search")
   .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].url)
            let image = document.querySelector(".randomCatImage")
            image.src = data[i].url 
        }
})
})
    

let search = document.querySelector("form") 
console.log(search)
let list = document.querySelectorAll("li") 
console.log(list[0].textContent);
search.addEventListener("submit", function(e) {
    e.preventDefault()
     if (e.target.elements[0].value === list[0].textContent || e.target.elements[0].value === "1" || e.target.elements[0].value === "hats" ) { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=1" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let i = 0; i < data.length; i++) { 
                 console.log(data[i].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[i].url
             }
         })
     }
        if (e.target.elements[0].value === list[1].textContent || e.target.elements[0].value === "2" || e.target.elements[0].value === "space" ) { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=2" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let j = 0; j < data.length; j++) { 
                 console.log(data[j].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[j].url
             }
         })
     }
        if (e.target.elements[0].value === list[2].textContent || e.target.elements[0].value === "4" || e.target.elements[0].value === "sunglasses" ) { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=4" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let j = 0; j < data.length; j++) { 
                 console.log(data[j].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[j].url
             }
         })
     }
 
        if (e.target.elements[0].value === list[3].textContent || e.target.elements[0].value === "5" || e.target.elements[0].value === "boxes") { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=5" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let j = 0; j < data.length; j++) { 
                 console.log(data[j].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[j].url
             }
         })
     }
        if (e.target.elements[0].value === list[4].textContent || e.target.elements[0].value === "7" || e.target.elements[0].value === "ties") { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=7" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let j = 0; j < data.length; j++) { 
                 console.log(data[j].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[j].url
             }
         })
     }
        if (e.target.elements[0].value === list[5].textContent || e.target.elements[0].value === "14" || e.target.elements[0].value === "sinks")  { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=14" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let j = 0; j < data.length; j++) { 
                 console.log(data[j].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[j].url
             }
         })
     }
        if (e.target.elements[0].value === list[6].textContent || e.target.elements[0].value === "15" || e.target.elements[0].value === "clothes") { 
     fetch("https://api.thecatapi.com/v1/images/search?category_ids=15" , { 
         headers: { 'x-api-key': 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
        }
         })
         .then(response => response.json())
         .then(data => {
             for (let j = 0; j < data.length; j++) { 
                 console.log(data[j].url)
                 let image2 = document.querySelector(".categoryCatImage")
                 image2.src = data[j].url
             }
         })
     }

})
            
            




  //  fetch("https://api.thecatapi.com/v1/categories" , {
//         headers: 'api_key=80680f16-d5be-4274-a086-2d9f80ea4a68'
     //   }
        // .then(response => response.json())
        //  .then(data => {
       //      for (let i = 0; i < data.length; i++) {
     //            console.log(data[i])

