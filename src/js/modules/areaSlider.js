function areaCards() {
    class MenuCard {
        constructor(link, src, src2, text, parentSelector, ...classes) {
            this.link = link;
            this.src = src;
            this.src2 = src2;
            this.text = text;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
            element.classList.add('swiper-slide')
            if (this.classes.length === 0) {
                this.element = 'area__slide';
                element.classList.add();
               
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <a href="${this.link}">
                    <img class="slide__image" src=${this.src} alt="area">
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
            "src": "img/area/wash.png",
            "src2": "img/area/wash-hover.png",
            "text": "Производство бытовой техники",
        },
        {
            "link": "#",
            "src": "img/area/table.png",
            "src2": "img/area/table-hover.png",
            "text": "Мебельная промышленность",
        },
        {
            "link": "#",
            "src": "img/area/wash.png",
            "src2": "img/area/wash-hover.png",
            "text": "Производство бытовой техники",
        },
        {
            "link": "#",
            "src": "img/area/table.png",
            "src2": "img/area/table-hover.png",
            "text": "Мебельная промышленность",
        },
        {
            "link": "#",
            "src": "img/area/wash.png",
            "src2": "img/area/wash-hover.png",
            "text": "Производство бытовой техники",
        },
        {
            "link": "#",
            "src": "img/area/table.png",
            "src2": "img/area/table-hover.png",
            "text": "Мебельная промышленность",
        },
    ];
    data.forEach(({link, src, src2, text,}) => {
                    new MenuCard( link, src, src2, text, '.area__swiper', 'area__slide').render();
                });
}

module.exports = areaCards;