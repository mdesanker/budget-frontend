const Dashboard = () => {
  return (
    <main>
      <div className="flex flex-col w-full items-center p-8 bg-gray-200">
        <div className="w-full pb-4">
          <h1 className="w-full text-2xl font-semibold">Hi Michael</h1>
          <p className="text-lg text-gray-600">
            Here's your spending dashboard
          </p>
        </div>
        <div className="flex w-full bg-white rounded-md shadow-xl p-6">
          <div className="flex flex-col w-2/3 justify-center items-center gap-2 border-r-2">
            <p className="text-4xl font-semibold">$939.25</p>
            <p className="text-gray-500">What you've spent</p>
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center gap-2">
            <p className="text-4xl text-blue-600 font-semibold">30</p>
            <p className="text-gray-500">Days</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
