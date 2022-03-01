interface Props {
  alert: {
    id: string;
    msg: string;
  };
}

const AlertMsg = ({ alert }: Props) => {
  const { msg } = alert;

  return (
    <div className="w-5/6 flex justify-center items-center bg-red-600 p-2 rounded mb-2">
      <p className="font-semibold text-xl text-white">{msg}</p>
    </div>
  );
};

export default AlertMsg;
