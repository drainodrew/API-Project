
// let photos = [];
// window.addEventListener('load', (event) => {
//   fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       for (let i = 0; i < data.length; i++) {
//         if (data.objectID != undefined && data.primaryImage != "" && data.message != 'ObjectID not found') {
//          console.log(data)
//         photos.push(data)[i]
//        }
//      }
     // console.log(data.total)
     // console.log(photos)
    //  console.log('page is fully loaded');
  //  });
//})


//let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let tab3 = document.querySelector("#tab3");
let tab4 = document.querySelector("#tab4");

let ptab1 = document.querySelector("#ptab1")
tab1.addEventListener("click", function (e) {
  e.preventDefault;
  fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        
        console.log('hey')
      }
      })

})
console.log("hey")
let cat = document.querySelector("#randomMonet");
let image = document.querySelector(".randomMonetImage")
let button = document.querySelector("#tab1")

// let promises = [];
// for (let i = 1; i <= 300; i++) {
//   promises.push(fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`));
// }
// Promise.all(promises)
//   .then(function handleData(data) {
//     return fetch("example.api") // should be returned 1 time
//       .then(response => {
//         if (response.ok) return response.json();
//         throw new Error(response.statusText);
//       });
//   })
//   .catch(function handleError(error) {
//     console.log("Error" + error);
//   });


let test;
let photos = [];
let hunnid = [];
window.addEventListener("load", function getData(e) {
  for (let i = 0; i < 301; i++) {
  fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + `${i}`)
  //fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + `${Math.floor(Math.random() * 477838)}`)
  .then((response) => {
    if (response.ok) { 
     return response.json();
    }
    return Promise.reject(response); 
  })
  .then((data) => { 
   // console.log(data); 
 
   //   function checkForData() {
      //   while (data.objectID === undefined || data.primaryImage === "" || data.isPublicDomain === false) {
      //     getData(e);
      //     if (data.objectID != undefined && data.primaryImage != "" && data.isPublicDomain === true) break;
        
    photos.push(data);
    for (let i = 0; i < photos.length; i++) {
      //if (data.objectID === undefined || data.primaryImage === "" || data.isPublicDomain === false) {
       //photos.s
      //}
     // const filteredArray = photos.filter(function(e) { return e !== ''})
    
      if (data.objectID !== undefined && data.primaryImage !== "" && data.isPublicDomain === true) {
        hunnid.push(photos[i])
      }
     }
     // console.log(hunnid)
    
      //     //   let scanner = setInterval(checkForData, 100);
      //   }
      // }
      //checkForData();
     // console.log(data)
      
      test = data;
      
     
    })
  
    .catch(error => {
      console.log("something went wrong", error)
        });
  }
})
let tester;
button.addEventListener("click", function randomPhoto(e) {
 // for (let i = 0; i < hunnid.length; i++) {
    
    console.log(hunnid)
  let randomPic = hunnid[Math.floor(Math.random() * hunnid.length)];
  if (randomPic.primaryImage === "") {
    randomPic = hunnid[Math.floor(Math.random() * hunnid.length)];
  }
  
  
  console.log(randomPic)
  tester = randomPic;
  let image = document.querySelector(".randomMonetImage")
  image.src = randomPic.primaryImage
  let noImage = ''
  if (randomPic.primaryImage === "") {
    noImage = "Argggg, matey!! Someone stole me painting!!!";
    image.src="pirate.jpeg"
  }
  let noName = ''
  if (randomPic.artistDisplayName === '') {
    noName = "unknown"
  }
    
    let artBio = document.querySelector("#ptab1")
    artBio.innerHTML =
    `<b>${randomPic.artistDisplayName}</b>\n\n${randomPic.title}\n${randomPic.medium}
      ${noImage}`;
})
//if (data.primaryImage = "") {
  //alert("Sorry, this work doesn't have an image.")

  