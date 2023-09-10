export default function Friend({friend}){
    console.log(friend);
    const {name, email, username} = friend
    return (
        <div className="box">
            <h2>Name : {name} </h2>
            <h4>UserName : {username}</h4>
            <p>Email : {email} </p>
            <div>
                <p>Address : Street({friend.address.street}), Suite({friend.address.suite}), City({friend.address.city})</p>
                <p>Zip : {friend.address.zipcode}</p>
            </div>
        </div>
    )
}