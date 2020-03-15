//http://ec2-54-145-130-62.compute-1.amazonaws.com
//http://localhost
const url = "http://ec2-54-145-130-62.compute-1.amazonaws.com:4567/"

axios.get(url + "users")
    .then(res => {
        console.log(res.data.data)
        users = res.data.data
        table = document.getElementById("users")

        users.forEach((user, i) => {
            //console.log(user);
            $('#users').append(`
                <tr>
                    <td>` + (i + 1) + `</td>
                    <td>` + user.firstName + `</td>                   
                    <td>` + user.lastName + `</td>
                    <td>` + user.email + `</td>
                    <td>
                        <button type="button" onclick="deleteUser(`+ user.id + `)" class="btn btn-danger">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            `)
        });

    })
    .catch(function (err) {
        console.log(err)
    });


function addUser () {

    var newUser = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $("#email").val()
    }
    console.log(newUser)
    axios.post(url + "users", newUser)
        .then(res => {
            console.log(res.data.data);
            window.location.reload();
        })

}

function deleteUser(id) {

    axios.delete(url + "users/" + id)
        .then(res => {
            console.log(res.data.data)
            window.location.reload();
        })
        .catch(function (err) {
            console.log(err)
        })
}
