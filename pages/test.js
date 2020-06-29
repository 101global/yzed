import LandingDataFetch from '../components/pageLayouts/LandingPage/LandingDataFetch';
import fetch from 'node-fetch';

const Reserved = ({ product }) => <LandingDataFetch product={product} exposure={1} />;

export async function getServerSideProps() {
  const product = await fetch(
    `https://firestore.googleapis.com/v1/projects/yzed-88819/databases/(default)/documents/landingBrand/${process.env.brandLandingReserved}`,
    { cors: 'no-cors' }
  ).then((res) => res.json().then((data) => data));
  return {
    props: {
      product,
    },
  };
}

export default Reserved;
