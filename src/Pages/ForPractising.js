function Practise() {
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

  return <div></div>;
}

export default Practise;
