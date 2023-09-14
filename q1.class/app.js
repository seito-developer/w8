(()=>{
  const $button = document.getElementById('js-modal-button');
  const $modal = document.getElementById('js-modal');

  const clickHandler = () => {
    $modal.classList.toggle('is-active');
  };

  $button.addEventListener('click', () => clickHandler());
})();