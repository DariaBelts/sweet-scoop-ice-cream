export const business = {
  name: 'Sweet Scoop',
  fullName: 'Sweet Scoop Ice Cream',
  tagline: 'Happiness in Every Scoop',
  street: '123 Sprinkle Street',
  city: 'Chicago, IL',
  phone: '(312) 555-0142',
  phoneHref: 'tel:+13125550142',
  email: 'hello@sweetscoopchicago.com',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=123+Sprinkle+Street+Chicago+IL',
  foundedYear: 2016,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'flavors', label: 'Flavors' },
  { id: 'specials', label: 'Specials' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const flavors = [
  {
    id: 'classic-vanilla',
    name: 'Classic Vanilla',
    description: 'Creamy Madagascar vanilla',
    price: 4.5,
    tint: '#fff6e1',
    badge: 'Timeless',
    scoop: { base: '#fbeecb', shade: '#efd79c', topping: 'specks' },
  },
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream',
    description: 'Fresh strawberries and sweet cream',
    price: 5.25,
    tint: '#ffeaf0',
    badge: 'Bestseller',
    scoop: { base: '#f9b8c7', shade: '#f08aa4', topping: 'berries' },
  },
  {
    id: 'chocolate-heaven',
    name: 'Chocolate Heaven',
    description: 'Rich Belgian-style chocolate',
    price: 5.5,
    tint: '#f6ebe3',
    scoop: { base: '#8f5d3f', shade: '#6d4129', topping: 'shavings' },
  },
  {
    id: 'mint-chocolate-chip',
    name: 'Mint Chocolate Chip',
    description: 'Cool mint with dark chocolate chips',
    price: 5.5,
    tint: '#e6f8f0',
    badge: 'Fan Favorite',
    scoop: { base: '#bff0dd', shade: '#8fdcc0', topping: 'chips' },
  },
  {
    id: 'cookies-and-cream',
    name: 'Cookies & Cream',
    description: 'Vanilla ice cream loaded with chocolate cookies',
    price: 5.75,
    tint: '#f3f1ee',
    scoop: { base: '#f6f1e8', shade: '#e0d6c4', topping: 'cookie' },
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel',
    description: 'Caramel ice cream with sea salt',
    price: 6.25,
    tint: '#fdf0e0',
    badge: 'Staff Pick',
    scoop: { base: '#ebbd82', shade: '#d69a52', topping: 'drizzle' },
  },
  {
    id: 'mango-paradise',
    name: 'Mango Paradise',
    description: 'Tropical mango ice cream',
    price: 5.25,
    tint: '#fff4d9',
    badge: 'Seasonal',
    scoop: { base: '#ffd46e', shade: '#ffb534', topping: 'chunks' },
  },
  {
    id: 'birthday-cake',
    name: 'Birthday Cake',
    description: 'Cake batter ice cream with colorful sprinkles',
    price: 6.5,
    tint: '#f3edff',
    badge: 'Kids Love It',
    scoop: { base: '#fff1d2', shade: '#f5dca5', topping: 'sprinkles', cherry: true },
  },
]

export const weeklyDeal = {
  eyebrow: 'Sweet Deal of the Week',
  title: 'Buy 2 Scoops, Get the 3rd FREE!',
  description:
    'Mix and match any of our handcrafted flavors. Pick two scoops and the third one is on us, in a cup or a fresh waffle cone.',
  code: 'SCOOP3',
  finePrint: 'Valid in store through Sunday. One offer per order.',
}

export const perks = [
  {
    title: 'Sundae Sunday',
    description: '$1 off every sundae, all day long.',
    accent: 'chocolate',
  },
  {
    title: 'Kids’ Cone Tuesday',
    description: 'Single-scoop kids’ cones for just $2.99.',
    accent: 'mint',
  },
  {
    title: 'Pint Club',
    description: 'Buy 5 hand-packed pints, get the 6th free.',
    accent: 'vanilla',
  },
]

export const stats = [
  { value: '20+', label: 'Flavors' },
  { value: '10', label: 'Years of Happiness' },
  { value: '50K+', label: 'Happy Customers' },
]

export const features = [
  {
    icon: 'sun',
    title: 'Made Fresh Daily',
    description:
      'Every batch is churned in our kitchen each morning, so your scoop is always at its creamiest.',
    accent: 'pink',
  },
  {
    icon: 'leaf',
    title: 'Premium Ingredients',
    description:
      'Real cream from Midwest dairies, whole vanilla beans, fresh fruit, and no artificial shortcuts.',
    accent: 'mint',
  },
  {
    icon: 'pin',
    title: 'Local Favorites',
    description:
      'We partner with Chicago bakeries and farms for mix-ins you will not find anywhere else.',
    accent: 'vanilla',
  },
  {
    icon: 'family',
    title: 'Family Friendly',
    description:
      'A bright, welcoming shop with kid-size scoops, dairy-free options, and plenty of seating.',
    accent: 'chocolate',
  },
]

export const reviews = [
  {
    quote:
      'The strawberry ice cream is incredible. You can actually taste the fresh strawberries! It has become our Friday night tradition.',
    name: 'Maya Robinson',
    detail: 'Lincoln Park',
    rating: 5,
  },
  {
    quote:
      'Best salted caramel in Chicago, hands down. The staff let me sample half the menu and never once rushed me.',
    name: 'James Thompson',
    detail: 'Wicker Park',
    rating: 5,
  },
  {
    quote:
      'Our kids ask for Birthday Cake every single weekend. Friendly people, spotless shop, and prices that feel fair for a family of five.',
    name: 'Elena Alvarez',
    detail: 'Logan Square',
    rating: 5,
  },
]

// days use JavaScript's Date#getDay() numbering (0 = Sunday)
export const hours = [
  { label: 'Monday–Thursday', time: '11 AM – 9 PM', days: [1, 2, 3, 4] },
  { label: 'Friday–Saturday', time: '11 AM – 10 PM', days: [5, 6] },
  { label: 'Sunday', time: '12 PM – 8 PM', days: [0] },
]

export const socialLinks = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/' },
]
