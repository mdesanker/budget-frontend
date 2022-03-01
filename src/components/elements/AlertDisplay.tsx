import AlertMsg from "./AlertMsg";

const AlertDisplay = () => {
  const alerts = [
    { id: "1", msg: "Invalid credentials" },
    { id: "2", msg: "Invalid credentials" },
    { id: "3", msg: "Invalid credentials" },
  ];

  return (
    <div className="absolute inset-x-0 top-0 flex flex-col items-center p-2">
      {alerts &&
        alerts.map((alert) => {
          return <AlertMsg key={alert.id} alert={alert} />;
        })}
    </div>
  );
};

export default AlertDisplay;
