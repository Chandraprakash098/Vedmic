const products = [
  {
    slug: 'project-management-tool',
    name: 'ProjectSync Pro',
    description: 'A powerful project management tool to streamline your team’s workflow and boost productivity.',
    price: 99.99,
    image: '/images/product1.jpg'
  },
  {
    slug: 'crm-solution',
    name: 'ClientConnect CRM',
    description: 'An intuitive CRM solution to manage customer relationships and drive sales growth.',
    price: 149.99,
    image: '/images/product2.jpg'
  },
  {
    slug: 'analytics-platform',
    name: 'DataInsight Analytics',
    description: 'Advanced analytics platform for real-time business intelligence and data visualization.',
    price: 199.99,
    image: '/images/product3.jpg'
  }
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}