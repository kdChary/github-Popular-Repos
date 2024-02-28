import './index.css'

const LanguageFilterItem = props => {
  const {repoDetails, isSame, filterRepositories} = props
  const {id, language} = repoDetails
  const changeClass = isSame ? 'selected' : 'not-selected'

  const onClickedFilterItem = () => {
    filterRepositories(id)
  }

  return (
    <li className="filter-item">
      <button
        type="button"
        className={changeClass}
        onClick={onClickedFilterItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
