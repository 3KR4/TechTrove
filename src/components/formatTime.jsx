function isYesterday(messageTime, currentTime) {
  const yesterday = new Date(currentTime);
  yesterday.setDate(currentTime.getDate() - 1);

  return (
    messageTime.getDate() === yesterday.getDate() &&
    messageTime.getMonth() === yesterday.getMonth() &&
    messageTime.getFullYear() === yesterday.getFullYear()
  );
}

export default function formatTime(timestamp) {
  const messageTime = new Date(timestamp);
  const currentTime = new Date();
  const timeDifference = currentTime - messageTime;
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference} seconds ago`;
  } else if (secondsDifference < 3600) {
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (secondsDifference < 86400) {
    const hours = Math.floor(secondsDifference / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (isYesterday(messageTime, currentTime)) {
    return 'Yesterday';
  } else if (messageTime.getFullYear() === currentTime.getFullYear()) {
    const day = messageTime.getDate();
    const month = messageTime.getMonth() + 1;
    return `${day}/${month}`;
  } else {
    const day = messageTime.getDate();
    const month = messageTime.getMonth() + 1;
    const year = messageTime.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
