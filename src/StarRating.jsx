// import { range } from './utils';

function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */
const name = 'chuka'
  return <div className="star-wrapper">
    {
      [...Array(rating)].map((_index)=> ( <img
        alt=""
        key={index}
        className="gold-star"
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      />))
    }
    
    
  </div>;
}

export default StarRating;
