import './index.css'

const TabItem = props => {
  const {tabsList, isActive, updateCato} = props
  const {tabId, displayText} = tabsList
  const addClassName = isActive ? 'color-border' : ''
  const updateCat = () => {
    updateCato(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`btn ${addClassName}`}
        onClick={updateCat}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
