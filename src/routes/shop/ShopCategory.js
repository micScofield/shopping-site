import Card from 'components/card/Card';

function ShopCategory({ productCategory }) {
  const { title, items } = productCategory;
  let obj = {};
  return (
    <div> 
      <h2>{title}</h2>
      <div className='card-container-grid'>
        {items &&
          items.map((item) => {
            obj = {
              footer: { value1: item.name, value2: `${item.price} ${item.currency ? item.currency : ''}` },
              imageUrl: item.imageUrl
            };
            return <Card cardData={obj} key={item.id}/>;
          })}
      </div>
    </div>
  );
}

export default ShopCategory;
