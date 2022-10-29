import {Card} from './Card';

export function Cards({dates}) {
  return (
    <div className="cards-container">
        <h4>Zona de influencia - GBA Sur</h4>
        <div className="cards">
            {dates.map((date, index) => {
                return <Card image = {date.imagen} title = {date.titulo} text = {date.texto} key={index}/>
            })}
        </div>
    </div>
  )
}
