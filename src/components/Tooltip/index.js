import classNames from "classnames";
import { useEffect, useState } from "react";
import "./style.scss";

function Tooltip(props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = props.attachTo;

    if (el != null) {
      const elBounds = el.getBoundingClientRect();

      el.addEventListener("mouseover", () => setVisible(true));
      el.addEventListener("mouseout", () => setVisible(false));

      setPos({
        x: elBounds.x + elBounds.width / 2,
        y: props.position == "top" ? elBounds.y : elBounds.y + elBounds.height,
      });
    }
  }, [props.attachTo]);

  return (
    visible && (
      <div
        className={classNames([
          "tooltip",
          { top: props.position == "top", bottom: props.position == "bottom" },
        ])}
        style={{
          top: pos.y,
          left: pos.x,
        }}
      >
        { props.text }
        <div className="arrow"></div>
      </div>
    )
  );
}

export default Tooltip;
