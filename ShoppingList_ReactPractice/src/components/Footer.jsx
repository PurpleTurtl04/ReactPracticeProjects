export default function Footer({ shoppingList }) {
  const total = shoppingList.length;
  const picked = shoppingList.filter((item) => item.picked).length;
  const percentage = Math.round((picked / total) * 100);

  return (
    <footer className="footer">
      Total {total} Picked {picked} {percentage}%
    </footer>
  );
}
