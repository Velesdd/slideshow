let index = 0;
let circles = ['circle1', 'circle2', 'circle3']
let imgs = ['Kim-Tae-Hyung-14.jpg','base_f4a2b908ddbb35445b626d6814935fc6.jpg', 'base_862a1ed6c2d6125ee203bd032451a05a.jpg']
let clickRight = () => {
    index++;
    console.log(index)
    if(index>=imgs.length){
        index=0;
        document.getElementById(circles[imgs.length-1]).style.background = '#9e9e9e78'
        document.getElementById(circles[index]).style.background =  'gray'
    }
    document.getElementById('pic').src = imgs[index]
    document.getElementById(circles[index-1]).style.background = '#9e9e9e78'
    document.getElementById(circles[index]).style.background =  'gray'
}
let clickLeft = () => {
    index--;
    console.log(index)
    if(index<0){
        index=2;
        document.getElementById(circles[0]).style.background = '#9e9e9e78'
        document.getElementById(circles[index]).style.background =  'gray'
    }
    document.getElementById('pic').src = imgs[index]
    document.getElementById(circles[index+1]).style.background = '#9e9e9e78'
    document.getElementById(circles[index]).style.background =  'gray'
}
let clickCircle = (id) => {
    for( let i = 0; i < circles.length; i++){
        if(id == circles[i]){
            index = i
            document.getElementById('pic').src = imgs[i];
            document.getElementById(circles[i]).style.background =  'gray'
        }
        else
            document.getElementById(circles[i]).style.background = '#9e9e9e78'
    }
}