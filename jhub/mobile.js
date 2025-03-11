document.addEventListener('DOMContentLoaded', () => {
    const rotateMessage = document.getElementById('rotateMessage');
    const closeRotate = document.getElementById('closeRotate');
    
    // Check if user has previously closed the message
    const isRotateMessageClosed = localStorage.getItem('rotateMessageClosed');
    
    if (isRotateMessageClosed) {
        rotateMessage.classList.add('hidden');
    }
    
    closeRotate.addEventListener('click', () => {
        rotateMessage.classList.add('hidden');
        localStorage.setItem('rotateMessageClosed', 'true');
    });
}); 