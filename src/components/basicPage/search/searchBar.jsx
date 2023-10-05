import * as S from "../../styles/basicPage/basicPageStyles"



const SearchBar = () => {

  // const Search = () => {
  //   const dispatch = useDispatch()
  //   const searchText = useSelector(selectSearchText)
  //   const handleSearchChange = (e) => {
  //     const newText = e.target.value
  //     dispatch(getSearchText(newText))
  //   }


    return (
      <S.CenterBlock >
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
          id="search-bar"
        />
      </S.CenterBlock>
    )
  }
  
  export default SearchBar
  