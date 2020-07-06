import LandingDataFetch from '../components/pageLayouts/LandingPage/LandingDataFetchStrapiApiTest';
import fetch from 'node-fetch';

const TestRoute = ({ testApiProduct }) => <LandingDataFetch testApiProduct={testApiProduct} />;

export async function getServerSideProps() {
  const testApiProduct = await fetch(
    `https://boxing-poutine-10562.herokuapp.com/collaborations?brandName=YZED`,
    { cors: 'no-cors' }
  ).then((res) => res.json().then((data) => data));
  return {
    props: {
      testApiProduct,
    },
  };
}

export default TestRoute;
