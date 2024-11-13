import supabase from "@/services/supabase";

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    // options: {
    //   queryParams: {
    //     access_type: "offline",
    //     prompt: "consent",
    //   },
    // },
  });

  if (error) {
    console.error("Error during Google sign-in", error.message);
  }
};