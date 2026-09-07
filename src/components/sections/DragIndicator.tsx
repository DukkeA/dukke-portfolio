import { SourceIcon } from "../source-icons";

export function DragIndicator() {
  return (
    <div className={"drag-wrap"}>
      <SourceIcon
        name="asset43"
        xmlns={"http://www.w3.org/2000/svg"}
        width={"100%"}
        viewBox={"0 0 10 10"}
        fill={"none"}
        className={"drag-left-icon"}
      />
      <div className={"drag-circle"}>
        <div className={"drag-circle-span"}>
          <p>{"drag"}</p>
          <p>{"click"}</p>
        </div>
      </div>
      <SourceIcon
        name="asset44"
        xmlns={"http://www.w3.org/2000/svg"}
        width={"100%"}
        viewBox={"0 0 10 10"}
        fill={"none"}
        className={"drag-right-icon"}
      />
    </div>
  );
}
