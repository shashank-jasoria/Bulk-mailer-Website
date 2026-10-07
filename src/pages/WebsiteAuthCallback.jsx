import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getWebsiteUser } from "../api/authApi";

export default function WebsiteAuthCallback({ onLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function verifyLogin() {
      try {
        const data = await getWebsiteUser();

        if (cancelled) {
          return;
        }
        onLogin({
          user: data.user,
          account: data.account,
        });
        const storedRedirect = window.sessionStorage.getItem(
          "relay_post_login_redirect",
        );

        window.sessionStorage.removeItem("relay_post_login_redirect");
        const redirectTo = storedRedirect?.startsWith("/")
          ? storedRedirect
          : "/";

        navigate(redirectTo, {
          replace: true,
        });
      } catch (error) {
        if (cancelled) {
          return;
        }

        console.error("Website OAuth callback error:", error);

        navigate("/login?error=oauth", {
          replace: true,
        });
      }
    }

    verifyLogin();

    return () => {
      cancelled = true;
    };
  }, [navigate, onLogin]);

  return (
    <main>
      <p>Signing you in...</p>
    </main>
  );
}
