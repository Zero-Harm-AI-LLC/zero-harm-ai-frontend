// src/components/Toast.tsx
import { useEffect, useState } from "react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    const removeTimer = setTimeout(onClose, 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white transition-opacity duration-1000 z-50 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      {message}
    </div>
  );
}
