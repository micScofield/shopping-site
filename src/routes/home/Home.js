import CardContainer from 'components/card-container/CardContainer';

import { categories } from 'data/categories';

const Home = () => {
  for (let i = 0; i < categories.length; i++) {
    categories[i].overlay = [categories[i].title, categories[i].subText];
    categories[i].overlayPosition = 'middle';
    categories[i].showOverlayByDefault = true;
  }
  return <CardContainer cards={categories} />;
};

export default Home;
