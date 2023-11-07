import { allPosts } from 'contentlayer/generated';

import { siteConfig } from '@/config';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';
import { Profile } from '@/components/Profile';

export default function Home() {
  const posts = allPosts;

  return (
    <div>
      <div className="my-10">
        <Profile items={siteConfig} />
      </div>
    </div>
  );
}
