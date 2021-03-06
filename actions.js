import { 
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

const _RNCallKit = NativeModules.RNCallKit;
const _RNCallKitEmitter = new NativeEventEmitter(_RNCallKit);

const RNCallKitDidReceiveStartCallAction = 'RNCallKitDidReceiveStartCallAction';
const RNCallKitPerformAnswerCallAction = 'RNCallKitPerformAnswerCallAction';
const RNCallKitPerformEndCallAction = 'RNCallKitPerformEndCallAction';
const RNCallKitDidActivateAudioSession = 'RNCallKitDidActivateAudioSession';
const RNCallKitDidDeactivateAudioSession = 'RNCallKitDidDeactivateAudioSession';
const RNCallKitDidDisplayIncomingCall = 'RNCallKitDidDisplayIncomingCall';
const RNCallKitDidPerformSetMutedCallAction = 'RNCallKitDidPerformSetMutedCallAction';
const RNCallKitPerformPlayDTMFCallAction = 'RNCallKitPerformPlayDTMFCallAction';

didReceiveStartCallAction = handler => {
    const listener = _RNCallKitEmitter.addListener(
        RNCallKitDidReceiveStartCallAction,
        (data) => { handler(data);}
    );
    _RNCallKit._startCallActionEventListenerAdded();
    return listener;
}

answerCall = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitPerformAnswerCallAction,
        (data) => { handler(data);}
    )
)

endCall = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitPerformEndCallAction,
        (data) => { handler(data); }
    )
)

didActivateAudioSession = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitDidActivateAudioSession,
        () => { handler(); }
    )
)

didDeactivateAudioSession = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitDidDeactivateAudioSession,
        () => { handler(); }
    )
)

didDisplayIncomingCall = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitDidDisplayIncomingCall,
        (data) => { handler(data.error, data.callUUID); }
    )
)

didPerformSetMutedCallAction = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitDidPerformSetMutedCallAction,
        (data) => { handler(data); }
    )
)

playDTMF = handler => (
    _RNCallKitEmitter.addListener(
        RNCallKitPerformPlayDTMFCallAction,
        (data) => { handler(data); }
    )
)

export const listeners = { 
    didReceiveStartCallAction,
    answerCall,
    endCall,
    playDTMF,
    didActivateAudioSession,
    didDeactivateAudioSession,
    didDisplayIncomingCall,
    didPerformSetMutedCallAction,
};

