import axios from "axios";

export default function WikiSearchExtension(query) {
    const search = axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&exintro&explaintext&redirects=1&srsearch=${query}`)
    
    if (query) {
        return search.then(res => res.data.query.search.map(item => {
                return {
                    title: item.title,
                    subtitle: item.snippet,
                    url: "http://en.wikipedia.org/?curid=" + item.pageid
                }
            })
        )
    }
}