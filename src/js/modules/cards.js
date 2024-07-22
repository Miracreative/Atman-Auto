function cards() {
    class MenuCard {
        constructor(type, link, src, title, descr, parentSelector, ...classes) {
            this.src = src;
            this.link = link;
            this.type = type;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
            element.classList.add('swiper-slide')
            if (this.classes.length === 0) {
                this.element = 'slide__item';
                element.classList.add();
               
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            const typeBlock = document.createElement('div');
            
            typeBlock.classList.add('slide__wrap');
            switch(this.type) {
                case 'industry': 
                    typeBlock.innerHTML = `
                        <img src="img/icons/industry.svg" alt="icon"}>
                        <span>"Материал для промышленности"</span>
                        `
                    break;
                case 'people' :
                    typeBlock.innerHTML = `
                        <img src="img/icons/people.svg" alt="icon"}>
                        <span>"Потребительский товар"</span>
                    `
                    break;
            }
            element.innerHTML = `
                <a href="${this.link}">
                    ${typeBlock.outerHTML}
                    <img class="slide__image" src=${this.src} alt="foam">
                    <h6 class="slide__title">${this.title}</h6>
                    <p>${this.descr}</p>
                </a>
            `;
            this.parent.append(element);
        }
    }
    
    // const getResource = async (url, data) => {
    //     const res = await fetch(url);
    
    //     if(!res.ok) {
    //         throw new Error(`Could not fetch ${url}, ststus: ${res.status}`);
    //     }
    
    //     return await res.json();
    // };
    
    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
    //         });
    //     });
    const data = [
        {
            "link": "#",
            "type": "people",
            "src": "img/slider/1.png",
            "title": "AFOAM® AF 7711 Black",
            "descr": "Двусторонняя монтажная лента",
        },
        {
            "link": "#",
            "type": "industry",
            "src": "img/slider/2.png",
            "title": "AFOAM® AF 7711 Black",
            "descr": "Двусторонняя монтажная лента",
        },
        {
            "link": "#",
            "type": "people",
            "src": "img/slider/3.png",
            "title": "AFOAM® AF 7711 Black",
            "descr": "Двусторонняя монтажная лента",
        },
        {
            "link": "#",
            "type": "people",
            "src": "img/slider/5.png",
            "title": "AFOAM® AF 7711 Black",
            "descr": "Двусторонняя монтажная лента",
        },
        {
            "link": "#",
            "type": "people",
            "src": "img/slider/4.png",
            "title": "AFOAM® AF 7711 Black",
            "descr": "Двусторонняя монтажная лента",
        },
        {
            "link": "#",
            "type": "industry",
            "src": "img/slider/1.png",
            "title": "AFOAM® AF 7711 Black",
            "descr": "Двусторонняя монтажная лента",
        },
    ];
    data.forEach(({type, link, src, title, descr}) => {
                    new MenuCard( type, link, src, title, descr, '.slide__inner', 'slide__item').render();
                });
}

module.exports = cards;