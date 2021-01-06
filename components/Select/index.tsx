import { useState } from "react";
import styles from "./select.module.css";
import cls from "classnames";
export default function Select({
  style = "gradiant",
  bg = "white",
}: {
  style?: "gradiant" | "no-border";
  bg?: string;
}) {
  const [o, setO] = useState(false);
  return (
    <div
      className={cls("w-fit h-fit rounded", styles.container, {
        "bg-linear-1": style === "gradiant",
        "border-none": style === "no-border",
      })}
    >
      <select
        defaultValue="test1"
        className={cls(
          `pl-4 pr-10 py-2 rounded border-none bg-transparent bg-anchor-down bg-1 bg-clip-border focus:outline-none focus:ring-2 ring-blue-100 bg-${bg}`,
          styles.select
        )}
      >
        <option>TEst 1</option>
        <option value="test1">TEst 2</option>
        <option>TEst 3</option>
        <option>TEst 4</option>
      </select>
    </div>
  );
}
