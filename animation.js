(function(){
  const login = document.querySelector('#signup')
  login.addEventListener('click', loginAccount)

  const moveBg = document.querySelector('.bg')
  const bgMove = document.querySelector('#bgMove')
  const secCreate = document.querySelector('#createLogin')
  const signin = document.querySelector('#login')

  moveBg.style.animationDirection
  function loginAccount(){

  moveBg.style.animationName = 'moveBackground'
  moveBg.style.animationDuration = '1s'
  
  bgMove.style.animationName = 'bgMoving'
  bgMove.style.animationDuration = '1s'

  secCreate.style.width = '40%'
  signin.style.width = '60%'
  }
  const createLogin = document.querySelector('#signin')
  createLogin.addEventListener('click', createloginAccount)

  function createloginAccount(){

  moveBg.style.animationName = 'moveBackground'
  moveBg.style.animationDuration = '1s'
  moveBg.style.animationDirection = 'reverse'
  
  bgMove.style.animationName = 'bgMoving'
  bgMove.style.animationDuration = '1s'
  bgMove.style.animationDirection = 'reverse'

  secCreate.style.width = '60%'
  signin.style.width = '40%'
  }
})()