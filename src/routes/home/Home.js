import CardContainer from 'components/card-container/CardContainer';

import { categories } from 'data/categories';

const Home = () => {
  for (let i = 0; i < categories.length; i++) {
    categories[i].overlay = {
      title: categories[i].title,
      subText: categories[i].subText,
    };
  }
  console.log(categories)
  return <CardContainer cards={categories} />;
};

export default Home;
