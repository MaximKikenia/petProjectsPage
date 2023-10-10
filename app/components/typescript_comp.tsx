const React = require("react");

import { Info } from './info';
import { ItemLayoutClosed } from './layoutClosed';
import { ItemOpenLayout } from './layoutOpen';

function MyName() {


    const [lang, setLang] = React.useState("RU");

    function changeLang(arg) {
        setLang(arg);
    };

    return (
        <div className="TotalWrapper">

            <div className="all">

                <div className="langWrapper">
                    <p>{Info.setLang[lang]}</p>
                    <input type="button" value={Info.buttonsLang[lang][1]} onClick={() => changeLang("RU")} />
                    <input type="button" value={Info.buttonsLang[lang][0]} onClick={() => changeLang("EN")} />
                </div>

                <div className="HeaderMain">
                    <h2 className="headTitle">{Info.pageTitle[lang]}</h2>
                    <a target="_blank" href="https://github.com/MaximKikenia/World_Universities_Directory_HTTP"><img className="githubIcon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" /> <p>Github</p></a>
                </div>
                <h2>{Info.progTitle[lang]}</h2>


                <div className="ProgramWrapper">
                    {Info.projectsItem.programming.map((item, index) =>
                            <ItemLayoutClosed
                                key={index}
                                name={item[lang].name}
                                watch={Info.watch[lang]}
                                description={Info.description[lang]}
                                textAbout={item[lang].textAbout}
                                link={item.linkTo}
                                stackTo={item.stack}
                                tech={Info.techInProgDesc[lang]}
                            />
                    )}
                </div>

                <h2>{Info.progTitleLayout[lang]}</h2>
                
                <div className="LayoutWrapper">
                    {Info.projectsItem.layouts.map((item, index) =>
                        <ItemOpenLayout
                            key={index}
                            name={item[lang].name}
                            watch={Info.watch[lang]}
                            description={Info.description[lang]}
                            textAbout={item[lang].textAbout}
                            link={item.linkTo}
                            stackTo={item.stack}
                            tech={Info.techInProgDesc[lang]}
                        />
                    )}
                </div>
                <p className="pageAuthor">
                    {Info.author[lang][0]}
                    <b> {Info.author[lang][1]}</b></p>
            </div>
        </div>)
}

export { MyName }