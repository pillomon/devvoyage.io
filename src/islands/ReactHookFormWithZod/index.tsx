import { useEffect } from 'react';

function ReactHookFormsWithZodIsland() {
  return (
    <div className="flex flex-col items-center gap-[50px]">
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <form
        id="signUpForm"
        className="mx-auto flex w-full max-w-[768px] flex-col gap-[30px] bg-gray-200 p-[20px]"
      >
        <input
          name="email"
          placeholder="Email"
          className="rounded-sm p-[10px]"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="rounded-sm p-[10px]"
        />
        <input
          name="password"
          type="password"
          placeholder="Password Check"
          className="rounded-sm p-[10px]"
        />
        <input
          name="firstName"
          placeholder="First Name"
          className="rounded-sm p-[10px]"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          className="rounded-sm p-[10px]"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="rounded-sm p-[10px]"
        />
        <label>
          Privacy Policy
          <input type="checkbox" className="rounded-sm p-[10px]" />
        </label>
      </form>
      <button className="w-full rounded-xl bg-blue-400 py-[10px] transition-colors hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
}

export default ReactHookFormsWithZodIsland;
