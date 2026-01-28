export default function FavoriteList({
  headingText,
  classes,
  list,
  ItemComponent,
}) {
  return (
    <>
      {list.length > 0 && (
        <div>
          <h2 className="heading-secondary">{headingText}:</h2>
          <ul className={classes}>
            {list.map((item) => (
              <ItemComponent key={item.id} item={item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
