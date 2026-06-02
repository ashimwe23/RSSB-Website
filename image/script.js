const images = [
    'doctor.avif',
    'man (1).avif',
    'mertanity (1).avif'
];
let currentIndex = 0;
const elt = document.getElementById('backgrounds');

setInterval(()=>{
    currentIndex = (currentIndex + 1)% images.length;
    elt.style.backgroundImage = images[currentIndex]; 
},1000);

