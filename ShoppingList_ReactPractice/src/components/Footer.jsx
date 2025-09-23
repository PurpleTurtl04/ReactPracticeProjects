export default function Footer({ shoppingList }) {
  const total = shoppingList.length;
  const picked = shoppingList.filter((item) => item.picked).length;
  const percentage = Math.round((picked / total) * 100);

  return (
    <footer className="footer">
      {picked === total
        ? "All Done ✅"
        : `You have picked up ${picked} ${
            picked === 1 ? "item" : "items"
          } out of the${" "}
      ${total} on your list (${percentage}%)`}
    </footer>
  );
}
