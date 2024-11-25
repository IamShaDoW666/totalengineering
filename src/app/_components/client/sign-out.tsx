import { signIn, signOut } from "@/server/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Log out</button>
    </form>
  );
}
