import { toast } from "react-toastify";

export const toastErr = (err: unknown) => {
  if (typeof err === "object" && err !== null && "message" in err) {
    const apiError = err as { message: string };
    console.log(apiError);
    toast.error(apiError.message);
  } else {
    console.error("Unexpected error:", err);
    toast.error("An unexpected error occurred.");
  }
};
