import { Button } from "@/components/ui/button";
import { signOut } from "@/server/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant={"destructive"} type="submit">
        Log out
      </Button>
    </form>
  );
}
