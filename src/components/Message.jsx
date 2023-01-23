
function Message({type, message}) {
  return (
    <div className={`alert alert-${type}`} role="alert">
    <strong>{message}</strong>
  </div>
  )
}

export default Message