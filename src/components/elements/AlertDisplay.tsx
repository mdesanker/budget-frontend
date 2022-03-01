import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import AlertMsg from "./AlertMsg";

const AlertDisplay = () => {
  const alerts = useAppSelector((state: RootState) => state.alerts);

  return (
    <div className="absolute inset-x-0 top-0 flex flex-col items-center p-2 z-50">
      {alerts &&
        alerts.map((alert) => {
          return <AlertMsg key={alert.id} alert={alert} />;
        })}
    </div>
  );
};

export default AlertDisplay;
