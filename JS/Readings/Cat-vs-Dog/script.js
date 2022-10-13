var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(element) {
    // console.log(element.style);
    // element.style.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src = "NationalGeographic_2572187_3x2.webp";
}

function pickDog(element) {
    console.log(element.classList);
    element.classList.add("btn");
    animalImg.src = "dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
}