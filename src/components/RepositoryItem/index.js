import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails

  return (
    <li className="repo-item">
      <div className="repo-avatar-card">
        <img src={avatarUrl} alt={name} className="repo-avatar" />
      </div>

      <h3 className="repo-title">{name}</h3>

      <div className="repo-feed-section">
        <div className="repo-feed-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="repo-feed-img"
          />
          <p className="repo-feed-text">{starsCount}</p>
        </div>

        <div className="repo-feed-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="repo-feed-img"
          />
          <p className="repo-feed-text">{forksCount}</p>
        </div>

        <div className="repo-feed-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="issues"
            className="repo-feed-img"
          />
          <p className="repo-feed-text">{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
