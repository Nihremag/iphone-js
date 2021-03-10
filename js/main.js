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

    tabs()

})