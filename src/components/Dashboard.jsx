import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="px-14 py-12 flex flex-col h-screen w-full space-y-6 ">
      <h2>Dashboard</h2>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded-md flex flex-col justify-center p-4 text-gray-700">
          <span className="font-bold">Shreya Rai</span>
          <span className="text-gray-500">Your Balance: Rs 50000</span>
        </div>

        <div className="w-2/5 h-[150px] border rounded-md flex flex-col justify-center p-4 text-gray-700">
          <span className="font-bold">Shreya Rai</span>
          <span className="text-gray-500">Your Expenses: Rs 50000</span>
        </div>
      </div>

      <div className="flex space-x-8">
        <h2>Expenses Chart</h2>
        <Chart/>
      </div>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded-md flex flex-col justify-center p-4 text-gray-700">
          <span className="font-bold">Activity</span>
          <li className="mt-4">You sent Rs 1000 to mom</li>
        </div>

        <div className="w-2/5 h-[150px] border rounded-md flex flex-col justify-center p-4 text-gray-700">
          <span className="font-bold">Pending Bills</span>
          <li className="mt-4">House bill 10000</li>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
