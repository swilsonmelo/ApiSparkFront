
const url = "http://localhost:4567/"

axios.get( url + "users")
    .then( res => {
        console.log(res.data)
    })
    .catch(function (err) {
        console.log(err)
    })
