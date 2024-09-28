const photoContainer = document.getElementById("photo-container");

let content ="";
for(let i=0;i<35; i++){
   content += getPhotoElement(i+1);
}

photoContainer.innerHTML =content;

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="img/photo-${photo_id}.jpg">
    </a>`;
}