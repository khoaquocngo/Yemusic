import { FC } from 'react';

import {
  HeartActiveIcon,
  HeartIcon,
  HomeActiveIcon,
  HomeIcon,
  SearchIcon,
} from '@common/components/atoms/Icon';
import Nav from '@common/components/molecules/Nav';
import abemClasses from '@utils/abemClasses';

export interface TProps {
  device?: 'mobile' | 'desktop';
  mode?: 'horizontal' | 'vertical';
}

export const Navigation: FC<TProps> = props => {
  const { device = 'desktop', mode = 'vertical' } = props;

  const navigation = [
    {
      icon: [<HomeIcon color='inherit' />, <HomeActiveIcon color='primary' />],
      name: 'Home',
      to: '/',
    },
    {
      icon: [<SearchIcon color='inherit' />, <SearchIcon color='primary' />],
      name: 'Search',
      to: '/search',
      device: 'mobile',
    },
    {
      icon: [
        <HeartIcon color='inherit' />,
        <HeartActiveIcon color='primary' />,
      ],
      name: 'Liked Tracks',
      to: '/liked-tracks',
    },
  ];

  return (
    <div className={abemClasses('o-navigation', device)}>
      <Nav mode={mode} device={device} navigation={navigation} />
    </div>
  );
};