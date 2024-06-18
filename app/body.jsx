"use client";
import services from "./services";
import notification from "./notification";
import { useState } from "react";

export default function Body() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    const result = await services(formData);
    if(result ==='1'){
      notification('Approved','Your Credit Scoring is in accordance with our criteria','success')
    }
    else{
      notification('Rejected','Your credit scoring does not meet our criteria','error')
    }
  };

 

  return (
    <>
      <div className="px-4 py-6">
        <form action={handleSubmit} className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              ID Number 
            </p>
            <input
              onChange={handleChange}
              name="column_number"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="md:flex gap-4 items-end">
            <div className="w-full md:w-1/2 space-y-3">
              <p className="text-slate-700 text-xl font-semibold">
                Revolving Utilization Of Unsecured Lines
              </p>
              <input
                onChange={handleChange}
                name="ruoul"
                className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <p className="text-slate-700 text-xl font-semibold">Age</p>
              <input
                onChange={handleChange}
                name="age"
                className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              Number Of Time 30-59 Days Past Due Not Worse
            </p>
            <input
              onChange={handleChange}
              name="not30_59dpdnw"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="md:flex gap-4">
            <div className="w-full md:w-1/2 space-y-3">
              <p className="text-slate-700 text-xl font-semibold">Debt Ratio</p>
              <input
                onChange={handleChange}
                name="debt_ratio"
                className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <p className="text-slate-700 text-xl font-semibold">
                Monthly Income
              </p>
              <input
                onChange={handleChange}
                name="monthly_income"
                className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              Number Of Open Credit Lines And Loans
            </p>
            <input
              onChange={handleChange}
              name="noocll"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              Number Of Times Days Late
            </p>
            <input
              onChange={handleChange}
              name="notdl"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              Number Real Estate Loans Or Lines
            </p>
            <input
              onChange={handleChange}
              name="nrelol"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              Number Of Time 60-89 Days Past Due Not Worse
            </p>
            <input
              onChange={handleChange}
              name="not60_89dnw"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="space-y-3">
            <p className="text-slate-700 text-xl font-semibold">
              Number Of Dependents
            </p>
            <input
              onChange={handleChange}
              name="nod"
              className="w-full border rounded-md border-gray-400 py-3 px-3 outline-none hover:ring-2 hover:ring-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
