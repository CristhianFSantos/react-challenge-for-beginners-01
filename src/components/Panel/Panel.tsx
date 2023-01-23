import React from "react";
import "./styles.scss";

export interface PanelProps {
  circlesList?: Circle[] | undefined;
  setCurrentCircle: (circle: Circle) => void;
}

export interface Circle {
  x: number;
  y: number;
  id: number;
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  const { circlesList, setCurrentCircle } = props;

  const handleOnClick = (event: any) => {
    const coords = {
      x: event?.clientX - 5, //difference cursor size
      y: event?.clientY - 5, //difference cursor size
      id: Math.random(),
    };

    setCurrentCircle(coords);
  };

  return (
    <div className="panel" onClick={handleOnClick}>
      {circlesList?.map((item: any) => {
        return (
          <div
            key={item.id}
            className="circle"
            style={{ top: item.y, left: item.x }}
          />
        );
      })}
    </div>
  );
};

export { Panel };
