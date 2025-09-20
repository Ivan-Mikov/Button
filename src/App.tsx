import Button from "./components/Button/Button";
import "./index.scss";

export default function App() {
  return (
    <div className="btn-div">
      <Button text="Primary" />
      <Button text="Secondary" style="secondary" />
      <Button text="Danger" style="danger" />
      <Button text="Default" style="default" />
      <Button text="Primary" size="small" />
      <Button text="Secondary" style="secondary" size="small" />
      <Button text="Danger" style="danger" size="small" />
      <Button text="Default" style="default" size="small" />
    </div>
  );
}
