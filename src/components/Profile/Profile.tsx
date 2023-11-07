import Image from 'next/image';

import { SiteType } from '@/models/Site';

import * as S from './styles';

type ProfileProps = {
  items: SiteType;
};

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div>
      <Image
        src="/assets/images/profile.jpeg"
        alt="profile image"
        width={80}
        height={80}
        title="profile image"
        priority
        className="rounded-full"
      />

      <S.Title>{items.title}</S.Title>
      <S.Subtitle>{items.subtitle}</S.Subtitle>
    </div>
  );
};
