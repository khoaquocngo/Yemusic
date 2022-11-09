import './styles.scss';

import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icon';
import Search from '@feature/Search';
import { useViewport } from '@hooks/useViewport';
import classNames from 'classnames';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const theme = 'light';

const Header: FC = () => {
  const { viewport } = useViewport();

  const [isOpenMobileSearch, setOpenMobileSearch] = useState(false);

  useEffect(
    function focusSearchInputOnOpenMobileSearch() {
      if (isOpenMobileSearch) {
        const listEl = document.getElementsByClassName('a-input-group_input');

        if (listEl?.length > 0) {
          const searchInputEl = listEl[0] as HTMLInputElement;
          searchInputEl.focus();
        }
      }
    },
    [isOpenMobileSearch]
  );

  useEffect(
    function closeMobileSearchOnDesktop() {
      if (viewport === 'desktop') {
        setOpenMobileSearch(false);
      }
    },
    [viewport]
  );

  useEffect(function closeMobileSearchOnClickSearchIcon() {
    if (viewport === 'mobile') {
      const listSearchIconEl = document.getElementsByClassName(
        'o-search_input_icon'
      );

      if (listSearchIconEl?.length > 0) {
        const searchIconEl = listSearchIconEl[0] as HTMLDivElement;
        searchIconEl.onclick = () => setOpenMobileSearch(false);
      }
    }
  });

  return (
    <header className='o-header'>
      <Link to='/' className='flex items-center w-max'>
        <Icon iconName='logo' wrapperStyle='logo' />
        <h1>Yemusic</h1>
      </Link>

      <div className='wrap-search'>
        {viewport === 'desktop' ? (
          <div className='absolute -top-7'>
            <Search />
          </div>
        ) : (
          <div className='flex justify-end'>
            <Button shape='circle' onClick={() => setOpenMobileSearch(true)}>
              <Icon iconName='search' />
            </Button>
          </div>
        )}
      </div>

      <div
        className={classNames(
          'fixed top-0 left-0 w-screen h-screen',
          !(isOpenMobileSearch && viewport === 'mobile') && 'hidden'
        )}
      >
        <Search />
      </div>

      <button className='o-header_btn' />
    </header>
  );
};

export default Header;
