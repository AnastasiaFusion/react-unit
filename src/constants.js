const letterSize = 12; // average approximate letter width
export const padding = 15;

export const items = [{
    title: 'Home',
    minWidth: letterSize * 4,
  },
  {
    title: 'About',
    minWidth: letterSize * 5,
  },
  {
    title: 'Best Deals',
    minWidth: letterSize * 9,
  },
  {
    title: 'Coupons',
    minWidth: letterSize * 7,
  },
  {
    title: 'Discounts',
    minWidth: letterSize * 9,
  },
  {
    title: 'Contact',
    minWidth: letterSize * 7,
  },
  {
    title: 'Log in',
    minWidth: letterSize * 6,
  },
  {
    title: 'News',
    minWidth: letterSize * 4,
  },
];

export const fullMenuSize = (() => {
  const sizes = items.map(item => item.minWidth + padding * 2);
  return sizes.reduce((acc, curr) => acc + curr)
})();
