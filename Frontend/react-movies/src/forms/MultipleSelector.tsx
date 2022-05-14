import "./MultipleSelector.css";

export default function MultipleSelector(props: multipleSelectorProps) {
  function select(item: MultipleSelectorModel) {
    const selected = [...props.selected, item];
    const nonSelected = props.nonSelected.filter((value) => value !== item);
    props.onChange(selected, nonSelected);
  }
  function deselect(item: MultipleSelectorModel) {
    const nonselected = [...props.nonSelected, item];
    const selected = props.selected.filter((value) => value !== item);
    props.onChange(selected, nonselected);
  }
  function selectAll() {
    const selected = [...props.selected, ...props.nonSelected];
    const nonSelected: MultipleSelectorModel[] = [];
    props.onChange(selected, nonSelected);
  }
  function deselectAll() {
    const nonselected = [...props.nonSelected, ...props.selected];
    const selected: MultipleSelectorModel[] = [];
    props.onChange(selected, nonselected);
  }
  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <div className="multiple-selector">
        <ul>
          {props.nonSelected.map((item) => (
            <li key={item.key} onClick={() => select(item)}>
              {item.value}
            </li>
          ))}
        </ul>
        <div className="multiple-selector-buttons">
          <button type="button" onClick={selectAll}>
            {">>"}
          </button>
          <button type="button" onClick={deselectAll}>
            {"<<"}
          </button>
        </div>
        <ul>
          {props.selected.map((item) => (
            <li key={item.key} onClick={() => deselect(item)}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
interface multipleSelectorProps {
  displayName: string;
  selected: MultipleSelectorModel[];
  nonSelected: MultipleSelectorModel[];
  onChange(
    selected: MultipleSelectorModel[],
    nonSelected: MultipleSelectorModel[]
  ): void
}
export interface MultipleSelectorModel {
  key: number;
  value: string;
}
