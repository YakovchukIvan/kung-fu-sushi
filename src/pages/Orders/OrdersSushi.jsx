function OrdersSushi({ item }) {
  const test = item;
  //   console.log('OrdersSushi  test:', test[0].items.imageUrl);
  return (
    <div>
      {item.map((item, index) => {
        console.log(item);
        // console.log('img', item[index].items.imageUrl);
        // <img src={img} alt="" />;
      })}
    </div>
  );
}

export default OrdersSushi;
