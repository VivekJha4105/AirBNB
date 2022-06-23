import React from "react"
// import katieZaferes from "../../public/images/katie-zaferes.png"
// import star from "../../public/images/st

export default function Cards(props) {
    let badgeText;
    if (props.element.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.element.location === "Online") {
        badgeText = "ONLINE";
    }   

    return (
        <section>
            <div className="card">
                { badgeText && <div className="card-badge">{badgeText}</div>}
                {/* <img src={`../images/${props.element.img}`} className="card-img"></img> */}
                <img src={`./{props.element.img}`} className="card-img"></img>
                <div className="card-stats">
                    <img src="./star.png" className="star"></img>
                    <span>{props.element.stats.rating}</span>
                    <span className="gray">({props.element.stats.reviewCount})</span>
                    <span className="gray">{props.element.location}</span>
                </div>
                <p className="card-text card-title">{props.element.title}</p>
                <p className="card-text card-price"><span className="bold">From ${props.element.price}</span>/person</p>
            </div>
        </section>
    )
}