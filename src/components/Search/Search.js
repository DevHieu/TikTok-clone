import { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

import { useDebounce } from "~/hooks";
import searchService from "~/service/searchService";
import Dropper from "~/components/Dropper/index";
import SearchAccountItems from "~/components/Search/SearchAccountItems/SearchAccountItems";
import SearchResultItems from "~/components/Search/SearchResultItems/SearchResultItems";
import { SearchIcon, LoadingIcon, DeleteIcon } from "~/components/Icons/Icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debounceValue = useDebounce(searchValue, 700);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchService(
        encodeURIComponent(debounceValue),
        "less"
      );
      setSearchResult(result);
      setLoading(false);
    };

    fetchAPI();
  }, [debounceValue]);

  //handle delete keyword in search box
  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleSearchValue = (e) => {
    const searchSyntax = e.target.value;

    if (!searchSyntax.startsWith(" ")) {
      setSearchValue(searchSyntax);
    }
  };

  return (
    <div className={cx("search")}>
      <HeadlessTippy
        interactive
        visible={showResult && searchValue.length > 0}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <Dropper>
              <div>
                <SearchResultItems />
                <SearchResultItems />
                <SearchResultItems />
              </div>
              <div className={cx("accounts-result")}>
                <p className={cx("account-heading")}>Accounts</p>
                {searchResult.map((result) => (
                  <SearchAccountItems key={result.id} data={result} />
                ))}
              </div>
            </Dropper>
          </div>
        )}
      >
        <input
          className={cx("search-input")}
          type="text"
          placeholder="Search account and videos"
          value={searchValue}
          onChange={handleSearchValue}
          onFocus={() => setShowResult(true)}
          ref={inputRef}
        />
      </HeadlessTippy>
      <div className={cx("search-focusing")}>
        {!!searchValue && !loading && (
          <button className={cx("clear-btn")} onClick={handleClear}>
            <DeleteIcon width="16px" height="16px" />
          </button>
        )}

        {loading && (
          <LoadingIcon
            width="16px"
            height="16px"
            className={cx("search-loading")}
          />
        )}
      </div>
      <span className={cx("span-spliter")}></span>
      <button
        className={cx("search-btn")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
export default Search;
