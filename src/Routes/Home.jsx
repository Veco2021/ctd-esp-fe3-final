import React from 'react'
import Card from '../Components/Card'
import { useEstadosGlobales } from '../Components/utils/global.context'

const Home = () => {
  const { } = useEstadosGlobales();
  
  const { providerValue } = useEstadosGlobales();
  const { data } = providerValue;
  
  return (
    <main>
        <h1>Home</h1>
        <div className='card-grid'>
        {data.map((item)=> (
        <div key={item.id}>
          <Card id={item.id} name={item.name} username={item.username}></Card>
        </div>
        ))}
        </div>
    </main>
  )
}

export default Home