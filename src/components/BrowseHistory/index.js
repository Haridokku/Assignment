import './index.css'

const BrowseHistory = props => {
  const {domainDetails, domainDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = domainDetails
  const deleteDomain = () => {
    domainDelete(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button type="button" onClick={deleteDomain} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default BrowseHistory
