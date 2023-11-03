import Link from 'next/link';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <div>Logo</div>

        <nav>
          <S.NavList>
            <S.NavItem>
              <Link href="/">Home</Link>
            </S.NavItem>
            <S.NavItem>
              <Link href="/articles">Articles</Link>
            </S.NavItem>
          </S.NavList>
        </nav>
      </S.Content>
    </S.Container>
  );
};
