
import './AvailableItems.css';
import AvailableItemsList  from './AvailableItemsList';

export const AvailableItems = (props) => {
    return (
      
      <li className='core-concept-item'>
        <img src={props.image} alt='{props.title}' />
        <div className="core-concept-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </div>
      </li>
     
    )
  }

export const AvailableItemsApp = (props) => {
  return (
    <div className='core-concept-app'>
        <main>
            <section id='core-concept' >
          
            <ul className='core-concept-list'>
               <AvailableItems {...AvailableItemsList[0]}/>
               <AvailableItems {...AvailableItemsList[1]}/>
               <AvailableItems {...AvailableItemsList[2]}/>
            </ul>
            </section>
        </main>
    </div>
  )
}
