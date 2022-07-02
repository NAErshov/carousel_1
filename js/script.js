$(document).ready(function() {
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 2;
    const container = $('.slider-container');    
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next'); 
    // Находим ширину каждого элемента
    const itemWidth = container.width() / slidesToShow;
    // Теперь надо проставить полученную ширину элементам
    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });

    // Функции для наших кнопок
    btnPrev.click(function(){
        console.log 
    });
    btnNext.click(function(){
        console.log 
    });
});