import 'expo-dev-client';
import React, {useState} from 'react';
import AgoraUIKit, {PropsInterface} from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: AgoraUIKitProps = {
    connectionData: {
      appId: '32696ec9d64949ccb3760a94d62c8032',
      rtcToken: "00632696ec9d64949ccb3760a94d62c8032IAD6CX62DgXH7iybmLHAOthfve+fQXJAhOSXpzTfC0h2362PbvEAAAAAEACv0GpjzJLhYgEAAQDMkuFi",
      channel: 'test-expoagora-channel',
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit connectionData={props.connectionData} rtcCallbacks={props.rtcCallbacks} />
  ) : null;
};

export default App;