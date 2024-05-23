'use strict';

function change(){
    let colorName = document.getElementById('colorName').value;
    let imageName = document.getElementById('imageName').value;
    let image = document.getElementById('image');
    const images = ['cafe.png','cats.png','line.png'];

    let colorLabel=document.getElementById('colorLabel');
    let imageLabel=document.getElementById('imageLabel');
    let rectangle =document.getElementById('rectangle');

    switch(colorName){
        case 'red':
            rectangle.setAttribute('class','redrect');
            imageLabel.setAttribute('class','redLabel');
            colorLabel.setAttribute('class','redLabel');
            colorLabel.innerHTML=`<p>色：${colorName}</p>`
            break;
        case 'blue':
            rectangle.setAttribute('class','bluerect');
            imageLabel.setAttribute('class','blueLabel');
            colorLabel.setAttribute('class','blueLabel');
            colorLabel.innerHTML=`<p>色：${colorName}</p>`
            break;
        case 'green':
            rectangle.setAttribute('class','greenrect');
            imageLabel.setAttribute('class','greenLabel');
            colorLabel.setAttribute('class','greenLabel');
            colorLabel.innerHTML=`<p>色：${colorName}</p>`
            break;
        default:
            rectangle.setAttribute('class','skyrect');
            imageLabel.setAttribute('class','blackLabel');
            colorLabel.setAttribute('class','blackLabel');
            colorLabel.innerHTML='<p>色：</p>'
            break;
    }

    if(images.indexOf(imageName)>=0){
        image.setAttribute('src',`img/${imageName}`);
    }else{
        image.setAttribute('src','');
    }
}

document.getElementById('changeBtn').addEventListener('click',() =>change());