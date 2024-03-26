import './CoreConcept.css'

export default function CoreConcept({image, title, description}) {
  // as {} são usadas para desestruturar os parâmetros do array de origem
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}