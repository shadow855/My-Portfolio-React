export function initializeCursor() {

  // This event listener ensures that the code runs when the DOM content is fully loaded.
  var cursor = document.getElementById('cursor');
  var body = document.getElementById('body');
  // Get references to the cursor and body elements.

  // eslint-disable-next-line no-unused-vars
  var isMoving = false;
  var updateTimer = null;
  // Initialize variables for tracking the mouse movement and the update timer.

  document.addEventListener('mousemove', function (e) {
    // Add an event listener for the 'mousemove' event to track the mouse movement.
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    // Get the current mouse coordinates.

    var scrollX = window.scrollX || window.pageXOffset;
    var scrollY = window.scrollY || window.pageYOffset;
    // Get the current scroll position of the window.

    mouseX += scrollX;
    mouseY += scrollY;
    // Adjust the mouse coordinates based on the scroll position.

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    // Update the position of the cursor element to match the mouse coordinates.

    if (updateTimer !== null) {
      clearTimeout(updateTimer);
    }
    // Clear the previous update timer to prevent multiple timers running concurrently.

    updateTimer = setTimeout(function updateBodyPosition() {
      // Start a new timer to update the body's position.

      var bodyX = parseInt(body.style.left) || 0;
      var bodyY = parseInt(body.style.top) || 0;
      // Get the current position of the body element.

      var deltaX = (mouseX - bodyX) / 2; // Adjust the speed here
      var deltaY = (mouseY - bodyY) / 2; // Adjust the speed here
      // Calculate the distance to move the body based on the mouse position.

      bodyX += deltaX;
      bodyY += deltaY;
      // Update the position of the body element.

      body.style.left = bodyX + 'px';
      body.style.top = bodyY + 'px';
      // Apply the updated position to the body element.

      var distance = Math.sqrt((mouseX - bodyX) * (mouseX - bodyX) + (mouseY - bodyY) * (mouseY - bodyY));
      // Calculate the distance between the cursor and the body.

      if (distance > 1) {
        updateTimer = setTimeout(updateBodyPosition, 30);
      }
      // If the distance is greater than a threshold (1 pixel in this case), continue updating the body's position.

    }, 10);
    // Start the timer after a delay of 10 milliseconds.

    if (e.clientX !== 0 && e.clientY !== 0) {
      isMoving = true;
    }
    // Set the isMoving flag to true when the mouse starts moving.

    if (e.clientX === 0 && e.clientY === 0) {
      isMoving = false;
    }
    // Set the isMoving flag to false when the mouse stops moving.

  });
}

