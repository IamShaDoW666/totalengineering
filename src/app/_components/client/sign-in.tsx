import { signIn } from "@/server/auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign in with GitHub</Button>
    </form>
  );
}
