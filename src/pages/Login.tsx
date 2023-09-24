import { useAuth } from "@/state/auth";

export function Login() {
  const { login } = useAuth();
  return <div>Login</div>;
}
