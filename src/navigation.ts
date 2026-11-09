import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/') },
    { text: 'Catálogo', href: getPermalink('/products/') },
    { text: 'English', href: getPermalink('/en/') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Explorar',
      links: [
        { text: 'Catálogo', href: getPermalink('/products/') },
        { text: 'English', href: getPermalink('/en/') },
      ],
    },
    {
      title: 'WhereToBuy',
      links: [
        { text: 'Descubrí productos y encontrá tiendas externas.', href: getPermalink('/') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: 'WhereToBuy es un catálogo de descubrimiento. Las compras se realizan en tiendas externas.',
};
