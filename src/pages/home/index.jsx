import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    };
    return (
        <div className="home-page">
            <form onSubmit={handleFormSubmit} className="form">
            <div>
                <label>Enter room code</label>
                <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter room code" />
            </div>
            <button type="submit">Enter Room</button>
            </form>
        </div>

    )
}

export default HomePage