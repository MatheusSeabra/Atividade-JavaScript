var currentImgIndex = 1;
var ImgSrcArray = [ 
'citrine.jpg"',
'citrine2.jpg',
'octavia.jpg',
'images.jpg'
];

function trocar(){

  if(currentImgIndex == ImgSrcArray.length) 
  {
    currentImgIndex=0;
  }
  document.getElementById("compreensivel").src=ImgSrcArray[currentImgIndex];
    currentImgIndex++; 
}