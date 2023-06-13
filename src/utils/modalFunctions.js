function openModal(id) {
  const dialogElement = document.getElementById(id)
  dialogElement.showModal()
}

function closeModal(id) {
  const dialogElement = document.getElementById(id)
  dialogElement.close()
}

export { openModal, closeModal }
