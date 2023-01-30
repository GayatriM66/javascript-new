//Work on classes

const btnShowModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const modal= document.querySelector('.modal')
const hidden = document.querySelector('.hidden')
const  overlay= document.querySelector('.overlay')


console.log(btnShowModal)
for(i=0;i<btnShowModal.length;i++){
    btnShowModal[i].addEventListener('click',function(){
      //  console.log('button clicked')
      modal.classList.remove('hidden') //name of class without [dot]
      overlay.classList.remove('hidden')
      btnCloseModal.addEventListener('click',function(){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
      })
    })
}
overlay.addEventListener('click',function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
