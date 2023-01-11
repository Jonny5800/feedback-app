function Practise() {
  //

  const items = [
    { name: "Rice", Price: 5 },
    { name: "Book", Price: 20 },
    { name: "Chicken", Price: 10 },
    { name: "Monitor", Price: 100 },
  ];

  const sum = items.reduce((acc, curr) => {
    return (acc += curr.Price);
  }, 0);
  console.log(sum);

  // let totalPrice = 0;
  // items.forEach(addPrices);

  // items.forEach((item) => {
  //   totalPrice += item.Price;
  // });

  // function addPrices(item, arr, index) {
  //   totalPrice += item.Price;
  // }

  // console.log(totalPrice);

  //
  return (
    <div>
      {/*Return this 
  statement*/}
    </div>
  );
}

export default Practise;
