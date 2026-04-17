import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Anmelden · Aera",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
