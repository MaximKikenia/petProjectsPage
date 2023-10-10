import { link } from "fs";

function ItemLayoutClosed(props) {

    return (
        <div className="ProgramItem">
            <h3>{props.name}</h3>
            <a target="blank" href={props.link}> {props.watch}</a>
            <details>
                <summary>{props.description}</summary>
                <div>{props.textAbout}</div>
                <div className="technologiesWrapper">
                    <h5>{props.tech}</h5>
                    <ul className="allTechWrapper">
                        {props.stackTo.map((item:any, index:number) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </details>
        </div>
    )
}

export { ItemLayoutClosed };