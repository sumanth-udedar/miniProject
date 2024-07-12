import React from 'react';
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = (element) => {
        const appId = 1652616712;
        const serverSecret = "869858958d1c686bbad224bacefc5c17";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Sumanth");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };
    return (
        <div className='room-page'>
            <div ref = {myMeeting}/>

        </div>
    )
}

export default RoomPage