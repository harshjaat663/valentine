$(document).ready(function () {
  var card = document.getElementById('valentineCard');
  var body = document.body;
  var recipientImage = document.getElementById('userPhoto');
  var hammertime = new Hammer(card);

  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

  hammertime.on('swipeleft', function () {
      card.style.transform = 'rotateY(-180deg)';
      body.style.backgroundImage = 'url(h.jpg)'; /* Show background image on swipe left */
      // Set the recipient's image source here
      recipientImage.src = 'h.jpg'; 
  });

  hammertime.on('swiperight', function () {
      card.style.transform = 'rotateY(0deg)';
      body.style.backgroundImage = 'none'; /* Hide background image on swipe right */
      recipientImage.src = ''; // Clear the recipient's image source on swipe right
  });
});
