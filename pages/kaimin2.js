import BrandDataFetch from '../components/pageLayouts/BrandPage/BrandDataFetch';
import fetch from 'node-fetch';

const Kaimin = ({ product }) => <BrandDataFetch product={product} exposure={1} />;

export async function getServerSideProps() {
  const product = await fetch(
    `https://firestore.googleapis.com/v1/projects/yzed-88819/databases/(default)/documents/landingBrand/${process.env.brandLandingKaimin}`,
    { cors: 'no-cors' }
  ).then((res) => res.json().then((data) => data));
  return {
    props: {
      product,
    },
  };
}

export default Kaimin;
