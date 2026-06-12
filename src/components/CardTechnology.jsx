import React from 'react'

export default function CardTechnology({title, children}) {
  return (
    <article className='card-tecnology'>
        <h3>{title}</h3>
        {children}
    </article>
  )
}
