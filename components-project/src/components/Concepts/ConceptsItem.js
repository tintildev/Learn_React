import "./conceptsItem.scss";

function ConceptsItem(props) {
    const classes = 'item ' + 'item__' + props.className;

  return (
    <div className={classes}>
      <h2 className="item__title">{props.title}</h2>
      <p className="item__text">{props.text}</p>
    </div>
  );
}

export default ConceptsItem;
