import { Alert } from "react-bootstrap";

const Welcome = (props) => {
  return (
    <div className="container mt-3">
      <Alert className="mb-5" variant="success">
        {props.content}
      </Alert>
      <h1>{props.header}</h1>
    </div>
  );
};
export default Welcome;
