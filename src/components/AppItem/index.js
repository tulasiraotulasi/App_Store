import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl, appId} = appsList

  return (
    <li className="box" key={appId}>
      <img src={imageUrl} alt={appName} className="socialItems" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
