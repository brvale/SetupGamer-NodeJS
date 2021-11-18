//carrosel
const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

let currentSlideIndex = 0

const manipulateSlidesClasses = correctSlideIndex => {
    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
    })

    slides[correctSlideIndex].classList.add('carousel__item--visible')
}

nextButton.addEventListener('click', () => {
    const correctSlideIndex = currentSlideIndex === slides.length - 1
        ? currentSlideIndex = 0
        : ++currentSlideIndex
    
    manipulateSlidesClasses(correctSlideIndex)
})

prevButton.addEventListener('click', () => {
    const correctSlideIndex = currentSlideIndex === 0
        ? currentSlideIndex = slides.length - 1
        : --currentSlideIndex
    
    manipulateSlidesClasses(correctSlideIndex)
})


    
