// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {details, activeId, onClickItem} = props
  const {id, language} = details

  const languageClassName =
    activeId === id ? 'language-btn active' : 'language-btn'

  const onChangeFilter = () => {
    onClickItem(id)
  }

  return (
    <li>
      <button
        type="button"
        className={languageClassName}
        onClick={onChangeFilter}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
