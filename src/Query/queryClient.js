import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";


const queryClient = new QueryClient()
const useMutationGeneric = (fn, queryKey, labelSuccess) => {
    return useMutation({
        mutationFn: fn,
        onSuccess: () => {
            console.log(labelSuccess);
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
        onError: (error) => {
            console.error('Error', error);
        }
    })
}

const UseGetGeneric = (queryKey, queryFn, selectFn) => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: [queryKey],
        queryFn: queryFn,
        select: selectFn || ((data) => data.sort((a, b) => b.id - a.id)) // Sort products by name
    });
    return { isLoading, data, isError, error }
}
export {
    queryClient, useMutationGeneric, UseGetGeneric
}