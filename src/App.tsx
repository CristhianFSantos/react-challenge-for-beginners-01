import { useCallback, useState } from "react";
import "./App.scss";
import { CustomButtom } from "./components/CustomButton/CustomButton";
import { Circle, Panel } from "./components/Panel/Panel";

function App() {
  const [_, setCurrentCircle] = useState<Circle>();

  const [circlesList, setCirclesList] = useState<Circle[]>([]);
  const redoList: Circle[] = [];

  const getCurrentCircle = useCallback((circle: Circle) => {
    setCurrentCircle(circle);

    setCirclesList((prevCircleItem: any) =>
      prevCircleItem ? [...prevCircleItem, circle] : [circle]
    );
  }, []);

  const onClickUndo = useCallback(() => {
    setCirclesList((prevState: any) => {
      const newState = [...prevState];
      const lastItem = newState.pop();
      redoList.push(lastItem);
      return newState;
    });
  }, []);

  const onClickRedo = useCallback(() => {
    setCirclesList((prevState: any) => {
      if (redoList.length > 0) {
        const newState = [...prevState];
        const lastItem = redoList.pop();
        newState.push(lastItem);
        return newState;
      }
      return prevState;
    });
  }, []);

  return (
    <div className="App">
      <Panel setCurrentCircle={getCurrentCircle} circlesList={circlesList} />

      <div className="button-container">
        <CustomButtom onClick={onClickUndo} label="Undo" />
        <CustomButtom onClick={onClickRedo} label="Redo" />
      </div>
    </div>
  );
}

export default App;
