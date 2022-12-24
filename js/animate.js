window.addEventListener('scroll', cards);

function cards() {
    let revela = document.querySelectorAll('[data-card]');
    const animaClass = 'animate';

    for (let i = 0; i < revela.length; i++) {
      let windowHeight = window.innerHeight;
      let revelaTop = revela[i].getBoundingClientRect().top;
      let valorReferencia = 180;
      
      if (revelaTop < windowHeight - valorReferencia) {
        revela[i].classList.add(animaClass);
      } else{
        revela[i].classList.remove(animaClass);
      }
    }
}