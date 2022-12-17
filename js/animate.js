// Lógica da animação:
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
//  3.1 - Verificar a distância entre a barra de scroll e o topo do site
//  3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
//  3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação

// Debounce do Lodash
/*const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
*/
const target = document.querySelectorAll('[data-card]');
const animationClass = 'animate';

function animaScroll() {
    const windowTop = window.pageYOffset - 250;
    target.forEach(function(element) {
      if ((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      }

      console.log(element.offsetTop);
    })
}

animaScroll();


window.addEventListener('scroll', function(){
    animaScroll();
})