interface baseState {
  token: undefined;
  name: string;
  loading: boolean;
}

export const useBaseStore = defineStore({
  id: 'base',
  state: (): baseState => {
    return {
      token: undefined,
      name: 'jim',
      loading: false,
    };
  },
  actions: {
    setLoading(isLoading: boolean) {
      this.loading = isLoading;
    },
    async getGithubList() {
      return await useAPI().getGithubList()
    },
  },
});
