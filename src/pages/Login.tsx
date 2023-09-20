import { useAuth } from "@/state/auth";

export function Login() {
  const { login } = useAuth();
  return (
    <>
      <button onClick={() => login()}>Login</button>
    </>
  );
}
