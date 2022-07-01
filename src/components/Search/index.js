import { useState, useEffect, useRef } from "react";
import { useDebounce } from "~/hooks";
import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

import Dropper from "~/components/Dropper/index";
import SearchAccountItems from "~/components/SearchAccountItems/index";
import SearchResultItems from "~/components/SearchResultItems/index";
import { SearchIcon, LoadingIcon, DeleteIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debounce = useDebounce(searchValue, 700);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounce
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [debounce]);

  //handle delete keyword in search box
  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
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
          onChange={(e) => setSearchValue(e.target.value)}
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
      <button className={cx("search-btn")}>
        <SearchIcon />
      </button>
    </div>
  );
}
export default Search;
