const btn=document.querySelector('#check');

btn.addEventListener('click', function(){
  const background= document.querySelector('html');
  if(background.classList.contains('dark')){
    background.classList.remove('dark');
    background.classList.add('light');
  }
  else{
    background.classList.remove('light');
    background.classList.add('dark');
  }
})

var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')

check.addEventListener('change',function(){

  if(this.checked == true){
    box.setAttribute('style','background-color:white;')
    ball.setAttribute('style','transform:translatex(100%);')
  }

  else if(this.checked == false){
    box.setAttribute('style','background-color:black; color:white;')
    ball.setAttribute('style','transform:translatex(0%);')
  }
})

