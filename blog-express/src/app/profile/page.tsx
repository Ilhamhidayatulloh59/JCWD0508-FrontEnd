"use client";

import EditAvatar from "@/components/form/avatar";
import authGuard from "@/hoc/authGuard";

function ProfilePage() {
  return (
    <div suppressHydrationWarning>
      <EditAvatar />
    </div>
  );
}

export default authGuard(ProfilePage);
