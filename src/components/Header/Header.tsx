import Link from 'next/link';

import { Logo } from '@/components/Logo';

import { HeaderNav } from '@/models';

import * as S from './styles';

type HeaderProps = {
  items: HeaderNav;
};

export const Header = ({ items }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <nav>
          <S.NavList>
            {items.mainNav.map((item) => (
              <S.NavItem key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </S.NavItem>
            ))}
          </S.NavList>
        </nav>
      </S.Content>
    </S.Container>
  );
};
