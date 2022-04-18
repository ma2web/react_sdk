import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useStyles } from './Solutions.styles';

const Cards = () => {
  const classes = useStyles();

  // GSAP section
  const ref = useRef([]) as any;
  ref.current = [];

  useEffect(() => {
    ref?.current.map((item: any, index: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center+=350',
          end: 'top center+=30',
          scrub: 3,
          // markers: true,
        },
      });
      tl.fromTo(
        item,
        {
          autoAlpha: 0,
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        },
        {
          duration: 1 + index,
          autoAlpha: 1,
          ease: 'power2',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        }
      );
      tl.fromTo(
        item?.querySelectorAll('div'),
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.3,
        }
      );
    });
  }, []);

  const addToRefs = (el: any) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className={classes.cards}>
      {cards?.map((card) => (
        <div className={classes.card}>
          <div className={classes.cardItem} key={card.id} ref={addToRefs}>
            <div className={classes.cardImage}>
              <img
                src={`https://source.unsplash.com/random/${card.id}00×${card.id}00`}
                alt={card.title}
              />
            </div>
            <div>
              <h1 className={classes.title}>{card.title}</h1>
            </div>
            <div>
              <p className={classes.description}>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

const cards = [
  {
    id: 1,
    title: 'Customer Engagement',
    description:
      'Convert customers into engaged advocates. Build and grow customer relationships with powerful social tools.',
  },
  {
    id: 2,
    title: 'Support and self-service',
    description:
      'Empower customers to help each other. Enable them to solve problems independently with collective wisdom.',
  },
  {
    id: 3,
    title: 'Feedback and communication',
    description:
      'Embrace the Voice of the Customer, collect actionable insights, and share product updates.',
  },
  {
    id: 4,
    title: 'Feedback and communication',
    description:
      'Embrace the Voice of the Customer, collect actionable insights, and share product updates.',
  },
  {
    id: 5,
    title: 'Customer Engagement',
    description:
      'Convert customers into engaged advocates. Build and grow customer relationships with powerful social tools.',
  },
  {
    id: 6,
    title: 'Support and self-service',
    description:
      'Empower customers to help each other. Enable them to solve problems independently with collective wisdom.',
  },
];
