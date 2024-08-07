import { useQueryClient, useMutation } from "@tanstack/react-query";


import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";
export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({user}) => {
      toast.success("User successfully updated");
      //manually set query data
      queryClient.setQueriesData(['user'], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return {updateUser, isUpdating};
}
