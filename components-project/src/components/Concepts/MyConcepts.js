import Card from "../UI/Card";
import ConceptsItem from "./ConceptsItem";

function MyConcepts(props) {
  return (
    <div className="project">
      <div className="project__Description">
        <h1>Key React Concepts</h1>
        <h3>Selected key React concepts you sould know abaout</h3>
      </div>

      <div className="project__Boxes">
        <Card className="Components">
          <ConceptsItem
            title={props.concepts[0].title}
            text={props.concepts[0].description}
          />
        </Card>
        <Card className="State">
          <ConceptsItem
            title={props.concepts[1].title}
            text={props.concepts[1].description}
          />
        </Card>
        <Card className="Events">
          <ConceptsItem
            title={props.concepts[2].title}
            text={props.concepts[2].description}
          />
        </Card>
      </div>
    </div>
  );
}

export default MyConcepts;
