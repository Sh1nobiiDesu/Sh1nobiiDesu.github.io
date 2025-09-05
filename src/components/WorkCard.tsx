import { Link } from 'react-router-dom'

interface cardItemProps {
    src? : string
    text? : string
    desc? : string
    label? : string 
    path : string
}

function WorkCard({src,text,desc,label,path} : cardItemProps) {
    return (
        <>
            <li className="cards__item">
                <Link to= {path} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                        <p className='cards__item__desc'>{desc}</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default WorkCard