import { useParams, Navigate } from "react-router-dom"

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if(!params.roomId) {
    return <Navigate to="/" />
  }

  return <div>Room Details {JSON.stringify(params)}</div>
}