import axios from 'axios';

export default function WikiSearchExtension(query) {

    const endpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&exintro&explaintext&redirects=1&srsearch=${query}`
    
    if (query) {
        return axios.get(endpoint)
        .then(res => res.data.query.search.map(
            item => ({
                title: item.title,
                subtitle: item.snippet,
                url: "http://en.wikipedia.org/?curid=" + item.pageid
            })
        ))
    }
}

// fetchSearchResults = query => {
    
//     if (this.cancel) {
//         this.cancel.cancel()
//     }
    
//     this.cancel = axios.CancelToken.source();

//     axios.get(endpoint, {
//         cancelToken: this.cancel.token,
//     })
//         .then((res) => {
//         const resultNotFoundMessage = !res.data.query.searchinfo.totalhits ? "No results found." : "";
//         this.setState({
//             results: res.data.query.search,
//             message: resultNotFoundMessage,
//             loading: false,
//         });
//     })
//     // .catch((error) => {
//     //     if (axios.isCancel(error) || error) {
//     //         console.log("got cancelled; error")
//     //         this.setState({
//     //             loading: false,
//     //             message: "Fetch failed."
//     //         });
//     //     }
//     // });
// };