

enum API {
  RepoList = "users/jimmyy512/repos",
}

export const useAPI = () => {
  let axios = useAxios();
  return {
    getGithubList(){
      return axios.request<Base.RepoList[]>({
        method: "GET",
        url: `${API.RepoList}`,
      });
    },
  };
};
