export const BoxWidget = ({ classname, title, value }) => {
  return (
    <div className="col box-widget text-center">
      <p>{title}</p>
      <span className="box-value">{value}</span>
    </div>
  );
};
