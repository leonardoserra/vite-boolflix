import { reactive } from "vue";
export const store = reactive(
    {
        movies: [],
        tvSeries: [],
        search: '',
        apiToken: '59d77b0a67470408acdf8c71d519c3b4',
        genres: []
    }
)
