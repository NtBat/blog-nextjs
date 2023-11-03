import tw from 'tailwind-styled-components';

export const Container = tw.header`
bg-primary/50
  fixed
  z-40
  flex
  h-16
  w-full
  items-center
  shadow-lg
  backdrop-blur-md
  transition-all
  duration-300
  ease-in-out
`;

export const Content = tw.div`
  flex
  h-full
  w-full
  items-center
  justify-between
  px-4
`;

export const NavList = tw.ul`
  flex
  items-center
  justify-between
  gap-4
`;

export const NavItem = tw.li`
  text-md
hover:text-link
  transition-colors
  duration-300
  ease-in-out
`;
