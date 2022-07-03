$(document).ready(function() {
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 2;
    const container = $('.slider-container');    
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next'); 
    // Сумарное колличество элементов
    const itemCount = item.length;
    // Находим ширину каждого элемента
    const itemWidth = container.width() / slidesToShow;
    // Чтобы понять сколько нам нужно проскролить, необходимо выполнить простое умножение
    const movePosition = slidesToScroll * itemWidth;


    // Теперь надо проставить полученную ширину элементам
    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });

     // Функции для наших кнопок
    btnNext.click(function(){
        const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        chechBtns();
    });

    btnPrev.click(function(){
        const itemLeft = Math.abs(position) / itemWidth;
        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        chechBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    // Проверяем активны ли наши кнопки или нет
    const chechBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled',position <= -(itemCount - slidesToShow) * itemWidth);
    };

    chechBtns();
});