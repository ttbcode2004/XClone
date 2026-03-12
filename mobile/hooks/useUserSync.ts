import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useApiClient, userApi } from "../utils/api";

export const useUserSync = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const api = useApiClient();

  const syncUserMutation = useMutation({
    mutationFn: (data: any) => userApi.syncUser(api),
    onSuccess: (response: any) => console.log("User synced successfully:", response.data.user),
    onError: (error: any) => {
      console.log("SYNC STATUS:", error.response?.status);
      console.log("SYNC DATA:", error.response?.data);
    },
  });

  useEffect(() => {
    if (isSignedIn && user) {
      syncUserMutation.mutate({
        clerkId: user.id,
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        image: user.imageUrl,
      });
    }
  }, [isSignedIn, user]);
};