<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact - Narendra Yadav</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    .glass-card {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .profile-badge {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #8b5cf6, #3b82f6);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 800;
      color: white;
      box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
    }
  </style>
</head>
<body class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center p-6 space-y-8">

  <!-- CONTACT CARD -->
  <div class="glass-card rounded-3xl p-8 max-w-md w-full shadow-2xl border-white/20 text-white text-center">
    <div class="space-y-4">
      <div class="profile-badge mx-auto mb-6">NY</div>
      <h1 class="text-3xl font-bold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p class="text-xl opacity-90">I’d love to hear from you!</p>

      <div class="space-y-4 mt-6">
        <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
          <div class="text-2xl mb-2">📱 Phone</div>
          <p class="font-bold text-xl">+91 9274160249</p>
        </div>
        <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
          <div class="text-2xl mb-2">✉️ Email</div>
          <p class="font-bold text-xl break-words">nyadav862@rku.ac.in</p>
        </div>
        <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
          <div class="text-2xl mb-2">🌐 GitHub</div>
          <a href="https://github.com/Imnarendra18" target="_blank" class="font-bold text-xl hover:underline">github.com/Imnarendra18</a>
        </div>
        <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
          <div class="text-2xl mb-2">📍 Location</div>
          <p class="font-bold text-xl">Rajkot, Gujarat</p>
        </div>
      </div>

      <!-- CONTACT FORM -->
      <form action="mailto:nyadav862@rku.ac.in" method="post" enctype="text/plain" class="mt-6 space-y-4">
        <input type="text" name="name" placeholder="Your Name" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300">
        <input type="email" name="email" placeholder="Your Email" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300">
        <textarea name="message" placeholder="Your Message" rows="4" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"></textarea>
        <button type="submit" class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all">
          📩 Send Message
        </button>
      </form>
    </div>
  </div>

</body>
</html>
