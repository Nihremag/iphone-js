document.addEventListener('DOMContentLoaded', () => {

    const tabs = () => {

        const cardDetailChange = document.querySelectorAll('.card-detail__change')
        const cardDetailsTitle = document.querySelector('.card-details__title')
        const cardImageItem = document.querySelector('.card__image_item')
        const cardDetailPrice = document.querySelector('.card-details__price')
        const descriptionMemory = document.querySelector('.description__memory')

        const data = [
            {
                name: 'Смартфон Apple Iphone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95990,
                memoryROM: 128
            },
            {
                name: 'Смартфон Apple Iphone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: 120990,
                memoryROM: 256
            },
            {
                name: 'Смартфон Apple Iphone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 99990,
                memoryROM: 128
            },
        ]

        const deactivate = () => {
            cardDetailChange.forEach(btn => btn.classList.remove('active'))
        }

        cardDetailChange.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    deactivate()
                    btn.classList.add('active')

                    cardDetailsTitle.textContent = data[i].name
                    cardImageItem.src = data[i].img
                    cardImageItem.alt = data[i].name
                    cardDetailPrice.textContent = data[i].price + '₽'
                    descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`
                }
            })
        })

    }

    const accordion = () => {
        const characteristicsList = document.querySelector('.characteristics__list')
        const characteristicsItem = document.querySelectorAll('.characteristics__item')
        
        const open = (button, dropDown) => {
            closeAllDrops(button, dropDown)
            dropDown.style.height = `${dropDown.scrollHeight}px`
            button.classList.add('active')
            dropDown.classList.add('active')
        }

        const close = (button, dropDown) => {
            button.classList.remove('active')
            dropDown.classList.remove('active')
            dropDown.style.height = ''
        }

        const closeAllDrops = (button, dropDown) => {
            characteristicsItem.forEach((elem) => {
                if (elem.children[0] !== button && elem.children[1] !== dropDown) {
                    close(elem.children[0], elem.children[1])
                }
            })
        }

        characteristicsList.addEventListener('click', (event) => {
            const target = event.target
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item')
                const description = parent.querySelector('.characteristics__description')
                description.classList.contains('active') ? close(target, description) : open(target, description)
            }
        })
    }

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy')
        const modal = document.querySelector('.modal')

        cardDetailsButtonBuy.addEventListener('click', () => {
            modal.classList.add('open')
        })

        modal.addEventListener('click', (event) => {
            const target = event.target
            if (target.classList.contains('modal__close')){
                modal.classList.remove('open')
            }
        })
        
    }

    tabs()
    accordion()
    modal()

})