import CardContainer from 'components/card-container/CardContainer';

import { categories } from 'data/categories'

const Home = () => {
  return <CardContainer cards={categories} />;
};

export default Home;
