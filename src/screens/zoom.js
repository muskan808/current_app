import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const ZoomMeetingPage = () => {
  const zoomMeetingLink = "YOUR_ZOOM_MEETING_LINK_HERE";

  const handleJoinMeeting = () => {
    // You can add any custom logic before redirecting to the Zoom meeting link
    // For example, you may want to check if the user is logged in or has the necessary permissions.

    // Open the Zoom meeting link in the WebView
    navigation.navigate('ZoomMeeting', { meetingLink: zoomMeetingLink });
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleJoinMeeting}>
        <Text>Join Zoom Meeting</Text>
      </TouchableOpacity>

      {/* WebView to open the Zoom meeting link */}
      <WebView source={{ uri: zoomMeetingLink }} />
    </View>
  );
};

export default ZoomMeetingPage;
