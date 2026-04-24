export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+34643012645"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-medium text-white shadow-2xl transition hover:bg-green-600"
    >
      <span className="text-lg">💬</span>
      WhatsApp
    </a>
  );
}