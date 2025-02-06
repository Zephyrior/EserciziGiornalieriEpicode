const MyFooter = (props) => {
  return (
    <div className="container">
      <hr />
      <div className="text-center">
        <p className="m-0">{props.address}</p>
        <p className="m-0">
          {props.phoneNumber} - {props.pIva}
        </p>
        <p className="m-0">{props.title}</p>
      </div>
    </div>
  );
};
export default MyFooter;
