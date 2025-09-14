import { useState } from "react";
import { Lock } from "lucide-react";

export default function Home() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = letters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-dark text-light">
      <div className="bg-black border border-gray-800 rounded-2xl p-8 w-full max-w-lg space-y-6 shadow-xl">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Lock className="w-6 h-6 text-light" />
          <h1 className="text-2xl font-bold tracking-wide">randomkaparol</h1>
        </div>

        {/* Рекламный блок */}
        <div className="bg-gray-900 border border-dashed border-gray-700 text-center text-grayish p-4 rounded-xl">
          Реклама (вставь сюда код AdSense)
        </div>

        <div>
          <p className="mb-2 text-grayish">Длина: {length}</p>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-white"
          />
        </div>

        <div className="flex items-center space-x-2 text-grayish">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <span>Цифры</span>
        </div>

        <div className="flex items-center space-x-2 text-grayish">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <span>Символы</span>
        </div>

        <button
          className="w-full bg-white text-black p-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          onClick={generatePassword}
        >
          Сгенерировать
        </button>

        {password && (
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <span className="font-mono break-all text-lg">{password}</span>
            <button
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
              onClick={copyToClipboard}
            >
              Копировать
            </button>
          </div>
        )}

        {/* Кнопка с партнерской ссылкой */}
        <a
          href="https://nordvpn.com" // заменишь на свою реферальную ссылку
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-white text-black p-3 rounded-xl font-semibold hover:bg-gray-300 transition"
        >
          Храните пароли безопасно →
        </a>
      </div>
    </div>
  );
}
