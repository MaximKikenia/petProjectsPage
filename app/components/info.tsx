const Info = {
    setLang: {
        RU: "Язык:",
        EN: "Language:"
    },
    buttonsLang: {
        RU: ["English", "Русский"],
        EN: ["English", "Русский"]
    },
    pageTitle: {
        RU: "Pet-проекты:",
        EN: "Pet-projects:"
    },
    progTitle: {
        RU: "Программирование на JavaScript:",
        EN: "JavaScript Programming:"
    },

    author: {
        RU: ["Разработчик:", "Кикеня Максим"],
        EN: ["Developer:", "Kikenia Maksim"],
    },

    progTitleLayout: {
        RU: "Вёрстка:",
        EN: "Layout:"
    },

    watch: {
        RU: "Смотреть",
        EN: "Watch"
    },

    description: {
        RU: "Описание",
        EN: "Description"
    },

    techInProgDesc: {
        RU: "Технологии в проекте:",
        EN: "Technologies in the project:",
    },

    projectsItem: {
        programming: [
            {
                linkTo: "https://my-nyt-app-210e74a2f9fe.herokuapp.com/",
                stack: ["NYTimes APi", "TypeScript", "React", "Redux", "React Router",  "SCSS", "CSS", "Webpack", "Git", "Heroku"],
                RU: {
                    name: "NYTimes: лучшие статьи и бестселлеры книг",
                    textAbout: "Сайт основан на источнике информации: NYTimes API. И предоставляет лучшие статьи и публикации на различные тематики, опубликаованные в NYTimes и Facebook. Отдельно предоставлена база данных книг бестселлеров по месяцам и датам."
                },
                EN: {
                    name: "NYTimes: Best articles and bestselling books",
                    textAbout: "The site is based on the information source: NYTimes API. And provides lists of the best articles and publications on various topics published in the NYTimes and Facebook. A database of bestseller books by month and date is provided separately."
                }
            },
            {
                linkTo: "https://my-wud-app-28903ca6f122.herokuapp.com/",
                stack: ["CountryFlagsAPI", "API Ninjas: Country API", "University API", "JavaScript", "React", "Redux", "React Router",  "SCSS", "CSS", "Webpack", "Git", "Heroku"],
                RU: {
                    name: "Справочник университетов мира (243 страны)",
                    textAbout: "На сайте отображаются университеты по выбранной стране. Для отображения флага, столицы и национальной валюты страны используются API, указанные на странице “About”. Интересующую страну можно выбрать из списка или воспользоваться полем поиска. Сайт имеет адаптивный дизайн."
                },
                EN: {
                    name: "Directory of World Universities (243 countries).",
                    textAbout: "The site displays universities by selected country. APIs are used to display the country's flag, capital, and national currency. A list of APIs can be found on the page “About”. You can select a country from the list or use the search field. The site has a responsive design."
                }
            },
            {
                linkTo: "https://my-old-apps-834f1a71a13f.herokuapp.com/drawPolygon/index.html",
                stack: ["HTML (Canvas)", "JavaScript", "React", "Redux", "CSS", "Webpack", "Git", "Heroku"],
                RU: {
                    name: "Рисовалка полигонов и кругов (Canvas)",
                    textAbout: "На сайте в области для рисования можно рисовать полигоны и круги. Также отображается площадь нарисованной фигуры. Сайт использует элемент Canvas для работы с графикой."
                },
                EN: {
                    name: "Drawing tool for polygons and circles (Canvas)",
                    textAbout: "In the drawing area you can draw polygons and circles. The area of the drawn figure is displayed. The site uses the Canvas element to work with graphics."
                }
            }],
        layouts: [
            {
                linkTo: "https://my-old-apps-834f1a71a13f.herokuapp.com/Investment%20agency/dist/index.html",
                stack: ["CSS", "HTML", "JavaScript", "Webpack", "Git", "Heroku"],
                RU: {
                    name: "Вёрстка страница, “Агенство Приватизации”",
                    textAbout: "Имеет адаптивный дизайн, выпадающее меню (в мобильной версии), подключенную Yandex-карту, слайдер с гербами в футере, hover эффекты."
                },
                EN: {
                    name: "Page layout, “Investment and privatization Agency”",
                    textAbout: "It has an adaptive design, a drop-down menu (in the mobile version), a connected Yandex map, a slider with coats of arms in the footer, and hover effects."
                }
            },
            {
                linkTo: "https://my-kitten-app-0818835228a5.herokuapp.com/",
                stack: ["SCSS", "CSS", "HTML", "JavaScript", "Webpack", "Git", "Heroku"],
                RU: {
                    name: "Лэндинг для породы британских кошек “Девон Рекс”",
                    textAbout: "Имеет адаптивный дизайн, выпадающее меню (в мобильной версии), галерею фотографий, форму обратной связи. "
                },
                EN: {
                    name: "Page for the british cat breed “Devon Rex”",
                    textAbout: "It has an adaptive design, a drop-down menu (in the mobile version), a photo gallery, and a feedback form."
                }
            },
            {
                linkTo: "https://my-old-apps-834f1a71a13f.herokuapp.com/poker%20slider/index.html",
                stack: ["JavaScript", "Jquery", "CSS", "HTML", "Webpack", "Git", "Heroku"],
                RU: {
                    name: "Анимированный слайдер для “Академии Покера”",
                    textAbout: "Анимированный слайдер с видео, текстом и изображением. По кнопкам и точкам переключаются слайды, по нажатию на лупу открывается лайтбокс."
                },
                EN: {
                    name: "Animated slider for “Poker Academy” with lightbox",
                    textAbout: "Animated slider with video, text and image. Buttons and dots switch slides. Opens to a lightbox when you click on the magnifying glass."
                }
            }
        ]

    }
};


export { Info };