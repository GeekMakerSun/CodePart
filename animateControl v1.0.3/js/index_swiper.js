// 在全局范围内创建主动画控制器与子动画控制器
const myAC_main1 = new animateControl("main1_ani_");
const myAC_child1 = new animateControl("child1_ani_");
const myAC_child2 = new animateControl("child2_ani_");
const myAC_child3 = new animateControl("child3_ani_");
// 在文档结构加载完成之后，载入swiper幻灯片，并初始化所有的动画控制器
$(document).ready(function () {
    // 第 1 个子swiper幻灯片
    const mySwiper_child1 = new Swiper('.swiper-container-child1', {
        direction: 'horizontal',
        grabCursor: true,
        loop: true,
        onInit: function (swiper) {
            myAC_child1.init(swiperAnimateParam_child1, swiper);
        },
        onSlideChangeEnd: function (swiper) {
            myAC_child1.play();
        },
    });
    // 第 2 个子swiper幻灯片
    const mySwiper_child2 = new Swiper('.swiper-container-child2', {
        direction: 'horizontal',
        grabCursor: true,
        loop: true,
        onInit: function (swiper) {
            myAC_child2.init(swiperAnimateParam_child2, swiper);
        },
        onSlideChangeEnd: function (swiper) {
            myAC_child2.play();
        },
    });
    // 第 3 个子swiper幻灯片
    const mySwiper_child3 = new Swiper('.swiper-container-child3', {
        direction: 'horizontal',
        grabCursor: true,
        loop: true,
        onInit: function (swiper) {
            myAC_child3.init(swiperAnimateParam_child3, swiper);
        },
        onSlideChangeEnd: function (swiper) {
            myAC_child3.play();
        },
    });
    // 主swiper幻灯片
    const mySwiper = new Swiper('.swiper-container-main1', {
        direction: 'vertical',
        grabCursor: true,
        loop: true,
        nextButton: '.swiper-button-next',
        onInit: function (swiper) {
            myAC_main1.init(swiperAnimateParam_main1, swiper);
            myAC_main1.addChild(2, myAC_child1);
            myAC_main1.addChild(3, myAC_child2);
            myAC_main1.addChild(4, myAC_child3);
            //myAC_main1.play(); // 如果页面中未使用Loading效果，则必须取消本行代码的注释，以开启myAC_main1主动画控制器中动画的播放
        },
        onSlideChangeEnd: function (swiper) {
            myAC_main1.play();
        },
    });
});