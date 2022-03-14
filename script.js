
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
let cat = document.querySelector("#randomMonet");
let image = document.querySelector(".randomMonetImage")
let button = document.querySelector("#tab1")
let button2 = document.querySelector("#tab2")

let photos = [];
let hunnid = [];
window.addEventListener("load", function getData(e) {
  for (let i = 0; i < 20000; i++) {
  fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + `${i}`)
  .then((response) => {
    if (response.ok) { 
     return response.json();
    }
    return Promise.reject(response); 
  })
  .then((data) => { 

        
    photos.push(data);
    for (let i = 0; i < photos.length; i++) {
    
      if (data.objectID !== undefined && data.primaryImage !== "" && data.isPublicDomain === true) {
        hunnid.push(photos[i])
      }
     }
     
    })
  
    .catch(error => {
      console.log("something went wrong", error)
        });
  }
})
let tester;
button.addEventListener("click", function randomPhoto(e) {
  let randomPic = hunnid[Math.floor(Math.random() * hunnid.length)];
  if (randomPic.primaryImage === "") {
    randomPic = hunnid[Math.floor(Math.random() * hunnid.length)];
  }  
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
    `<b><h2>${randomPic.artistDisplayName}</h2></b>\n<b>${randomPic.title}</b>\n${randomPic.medium}
      ${noImage}`;
})

  button2.addEventListener("click", function randomPhoto(e) {
     let randomPic = hunnid[Math.floor(Math.random() * hunnid.length)];
     if (randomPic.primaryImage === "") {
       randomPic = hunnid[Math.floor(Math.random() * hunnid.length)];
     }
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