


import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';

const displayDetails = [
  {
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    title: 'Mens Cotton Jacket',
    subtitle: 'Be inspired',
    description: 'Great outerwear jackets for Spring/Autumn/Winter.',
    buttonText: 'Order now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
    titleClass: 'md:typography-display-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
    link: '/product/3',  // Link for this product
  },
  {
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    subtitle: 'Be active',
    description: 'Lightweight perfet for trip or casual wear.',
    buttonText: 'Order now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
    link: '/product/17',  // Link for this product
  },
  {
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    subtitle: 'New collection',
    description: 'Faux leather material for style and comfort.',
    buttonText: 'Order now',
    reverse: false,
    backgroundColor: 'bg-secondary-200',
    link: '/product/16',  // Link for this product
  },
];

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1540px]">
      {displayDetails.map(
        ({
          image,
          title,
          subtitle,
          description,
          buttonText,
          backgroundColor,
          reverse,
          titleClass,
          subtitleClass,
          link,  // product link
        }) => (
          <div
            key={title}
            className={classNames(
              'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
              backgroundColor,
            )}
          >
            <a
              className="absolute w-full h-full z-10 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href={link}  // Link to the product page
            />
            <div
              className={classNames('flex justify-between overflow-hidden grow', {
                'flex-row-reverse': reverse,
              })}
            >
              <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames('uppercase typography-text-xs block font-bold tracking-widest', subtitleClass)}
                >
                  {subtitle}
                </p>
                <h2 className={classNames('mb-4 mt-2 font-bold typography-display-3', titleClass)}>{title}</h2>
                <p className="typography-text-base block mb-4">{description}</p>
                <SfButton className="!bg-black">{buttonText}</SfButton>
              </div>
              <img src={image} alt={title} className="w-1/2 self-end object-contain" />
            </div>
          </div>
        ),
      )}
    </div>
  );
}

