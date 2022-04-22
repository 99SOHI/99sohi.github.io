// Programming button
const btnProgramming = document.getElementById('btnProgramming')
const arr2 = document.getElementById('arrow1');
btnProgramming.addEventListener('click', function(event) {
  arr2.classList.toggle('down');
});

// Others button
const btnOther = document.getElementById('btnOther')
const arr3 = document.getElementById('arrow2');
btnOther.addEventListener('click', function(event) {
  arr3.classList.toggle('down');
});

// nav button
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')
const navButton = document.getElementById('navButton')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('kocak')
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  navButton.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  navButton.classList.remove('active')
}
