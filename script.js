document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingProgress = document.getElementById('loadingProgress');
  const loadingPercent = document.getElementById('loadingPercent');
  const fingerPrint = document.getElementById('fingerPrint');
  const fingerIcon = document.getElementById('fingerIcon');
  const message = document.getElementById('message');
  const passwordScreen = document.getElementById('passwordScreen');
  const passwordInput = document.getElementById('passwordInput');
  const errorMessage = document.getElementById('errorMessage');
  const scanError = document.getElementById('scanError');

  let loading = 1;
  let scanActive = false;
  let scanComplete = false;
  let scanTimer;

  // Animasi Loading
  const loadingInterval = setInterval(() => {
    loading++;
    loadingPercent.innerText = loading + '%';
    loadingProgress.style.width = loading + '%';
    if (loading >= 100) {
      clearInterval(loadingInterval);
      loadingScreen.style.display = 'none';
      fingerPrint.style.display = 'flex';
    }
  }, 30);

  // Animasi Scan Sidik Jari
  fingerIcon.addEventListener('mousedown', function() {
    if (!scanActive) {
      scanActive = true;
      scanTimer = setTimeout(() => {
        scanComplete = true;
        passwordScreen.style.display = 'flex';
        fingerPrint.style.display = 'none';
      }, 20000);
    }
  });

  fingerIcon.addEventListener('mouseup', function() {
    if (!scanComplete) {
      clearTimeout(scanTimer);
      scanActive = false;
      message.style.display = 'block';
    }
  });

  // Validasi Password
  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const password = passwordInput.value;
      if (password === 'montu123') {
        window.location.href = 'https://montunetwork.kyeestore.my.id'; // Ganti dengan link sebenarnya
      } else {
        errorMessage.style.display = 'block';
        setTimeout(() => {
          passwordScreen.style.display = 'none';
          scanError.style.display = 'block';
          setTimeout(() => {
            scanError.style.display = 'none';
            passwordScreen.style.display = 'flex';
          }, 40000);
        }, 1000);
      }
    }
  });
});
