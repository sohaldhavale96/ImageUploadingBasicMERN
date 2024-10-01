import PropTypes from "prop-types"
import { Avatar } from "@mui/material"

function UserCard({name,email,age,img}) {
  return (
    <div>
      <Avatar alt="Travis Howard" src={img} />
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>
  )
}

UserCard.propTypes = {
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}

export default UserCard