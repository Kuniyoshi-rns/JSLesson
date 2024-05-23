'use strict';

function change(){
    let colorName = document.getElementById('colorName').value;
    const colors = ['red','blue','green'];

    let imageName = document.getElementById('imageName').value;
    let image = document.getElementById('image');
    const images = ['cafe.png','cats.png','line.png'];

    let colorLabel=document.getElementById('colorLabel');
    let imageLabel=document.getElementById('imageLabel');
    let rectangle =document.getElementById('rectangle');

    if(colors.includes(colorName)){
        rectangle.setAttribute('class',`${colorName}rect`);
        imageLabel.setAttribute('class',`${colorName}Label`);
        colorLabel.setAttribute('class',`${colorName}Label`);
        colorLabel.getElementsByTagName('p')[0].textContent = `色：${colorName}`;

    }else{
        rectangle.setAttribute('class','skyrect');
        imageLabel.setAttribute('class','blackLabel');
        colorLabel.setAttribute('class','blackLabel');
        colorLabel.getElementsByTagName('p')[0].textContent = '色：';
    }

    if(images.includes(imageName)){
        image.setAttribute('src',`img/${imageName}`);
    }else{
        image.setAttribute('src','');
    }
}

document.getElementById('changeBtn').addEventListener('click',() =>change());