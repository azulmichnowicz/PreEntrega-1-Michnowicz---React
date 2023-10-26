import styles from "./itemlist.module.css"

export const ItemListContainer = ({greeting}) => { 
  return (
    <>
      <div className={`${styles.greeting}`}> {greeting} </div>
      <div className="container d-flex justify-content-center">
        <img src="/img/maq.jpg" alt="make up" />
      </div>
    </>
    
  )
}
