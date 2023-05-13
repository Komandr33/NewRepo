'use strict'

    // touchstart  // срабатывает при касании дисплея
    // touchmove   // срабатывает при движении пальца по диспею
    // touchend    // срабатывает при отрыве пальца от дисплея
    // touchenter  // срабатывает при наведении пальца на эл-т с этим событием
    // touchleave  // при соскальзывании пльца с элемента 
    // touchcancel // ср-т когда точка соприкосновения не регистрируется в зоне
    .touches       /* Включает все точки соприкосновения, которые сейчас активны на экране,
                      вне зависимости от элемента, к которому относится запущенная функция */
    .targetTouches /* Содержит только точки касания, которые начались в пределах элемента,
                      даже если пользователь перемещает пальцы за его пределами */
    .changedTouches /*Включает любые точки соприкосновения, которые изменились с последнего сенсорного события */

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
        console.log(e.changedTouches.pageY);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });
});