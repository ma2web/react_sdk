import AuthLayout from 'layout/AuthLayout/AuthLayout';
import { useSignUp } from 'hooks/useSignup';
import { useState } from 'react';
import Button from 'components/button/Button';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signup = useSignUp();

  return (
    <AuthLayout page="signup">
      <div className="w-1/2 mx-auto">
        <h1 className="text-2xl mb-5">Sign Up</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          type="email"
          placeholder="john@smith.com"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          type="text"
          placeholder="John"
          onChange={(event) => setName(event.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
          type="password"
          placeholder="********"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-5"
          role="alert"
        >
          <p className="text-sm">
            Password should have 1 lowercase letter, 1 uppercase letter, 1
            number, 1 special character and be at least 10 characters long.
          </p>
        </div>
        <Button
          color="primary"
          onClick={() => {
            signup(email, name, password);
          }}
        >
          Sign Up
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Signup;
