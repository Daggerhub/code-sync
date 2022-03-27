import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
 const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

  
  return (
    <div className='Wrapper'>
      <div className='formWrapper'>
        <h2 className='heading'>
          Paste Your Invitation Room Id
        </h2>
        <div className='inputGroup'>
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
          <button className='btn joinBtn' onClick={joinRoom}>Join Now</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href=''onClick={createNewRoom} className='createNewBtn'>
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
